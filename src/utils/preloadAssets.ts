import { getCloudinaryUrl } from './cloudinary';
import mappingData from '../data/cloudinary_mapping.json';

const CACHE_NAME = 'artimas-media-cache-v1';
const memoryBlobCache = new Map<string, string>();
const ongoingFetches = new Map<string, Promise<string>>();

/**
 * Retrieves a cached Blob URL for a given media/video URL using CacheStorage & in-memory Blob URLs.
 * If not already cached, fetches in background, stores in CacheStorage, and creates a Blob URL.
 */
export async function getCachedMediaUrl(url: string): Promise<string> {
  if (!url) return '';

  // 1. Check in-memory blob URL cache
  if (memoryBlobCache.has(url)) {
    return memoryBlobCache.get(url)!;
  }

  // 2. Prevent duplicate concurrent fetches for the same URL
  if (ongoingFetches.has(url)) {
    return ongoingFetches.get(url)!;
  }

  const fetchPromise = (async () => {
    try {
      // Check CacheStorage API if available
      if ('caches' in window) {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(url);
        if (cachedResponse) {
          const blob = await cachedResponse.blob();
          const blobUrl = URL.createObjectURL(blob);
          memoryBlobCache.set(url, blobUrl);
          return blobUrl;
        }

        // Fetch over network, cache response, and return Blob URL
        const networkResponse = await fetch(url, { mode: 'cors' });
        if (networkResponse.ok) {
          await cache.put(url, networkResponse.clone());
          const blob = await networkResponse.blob();
          const blobUrl = URL.createObjectURL(blob);
          memoryBlobCache.set(url, blobUrl);
          return blobUrl;
        }
      } else {
        // Fallback: fetch as blob directly
        const response = await fetch(url);
        if (response.ok) {
          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);
          memoryBlobCache.set(url, blobUrl);
          return blobUrl;
        }
      }
    } catch {
      // Fallback gracefully to original URL if offline or network error
    }

    return url;
  })();

  ongoingFetches.set(url, fetchPromise);
  const result = await fetchPromise;
  ongoingFetches.delete(url);
  return result;
}

/**
 * Pre-caches multiple media URLs in parallel with priority for weak connections.
 */
export async function precacheMediaUrls(urls: string[]): Promise<Record<string, string>> {
  const results: Record<string, string> = {};
  await Promise.allSettled(
    urls.map(async (url) => {
      const cached = await getCachedMediaUrl(url);
      results[url] = cached;
    })
  );
  return results;
}

const ALL_CLOUDINARY_URLS = Array.from(
  new Set(Object.keys(mappingData).map((key) => getCloudinaryUrl(key)))
);

let preloadingStarted = false;
let isPreloaded = false;

/**
 * Preloads all Cloudinary images and videos into browser HTTP cache and CacheStorage.
 * Can be called repeatedly; will only execute once.
 */
export function startAssetPreloading(
  onProgress?: (loaded: number, total: number, percent: number) => void
): Promise<void> {
  if (preloadingStarted) {
    return Promise.resolve();
  }
  preloadingStarted = true;

  const total = ALL_CLOUDINARY_URLS.length;
  let loadedCount = 0;

  const handleLoaded = () => {
    loadedCount++;
    const percent = Math.round((loadedCount / total) * 100);
    if (onProgress) {
      onProgress(loadedCount, total, percent);
    }
  };

  const promises = ALL_CLOUDINARY_URLS.map((url) => {
    return new Promise<void>((resolve) => {
      if (url.endsWith('.mp4') || url.includes('/video/upload/')) {
        getCachedMediaUrl(url)
          .then(() => {
            handleLoaded();
            resolve();
          })
          .catch(() => {
            handleLoaded();
            resolve();
          });
      } else {
        const img = new Image();
        img.src = url;

        img.onload = () => {
          handleLoaded();
          resolve();
        };

        img.onerror = () => {
          handleLoaded();
          resolve();
        };
      }
    });
  });

  return Promise.all(promises).then(() => {
    isPreloaded = true;
  });
}

export function isAssetsPreloaded(): boolean {
  return isPreloaded;
}

export default startAssetPreloading;
