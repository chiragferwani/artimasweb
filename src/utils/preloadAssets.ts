import { getCloudinaryUrl } from './cloudinary';

// Critical above-the-fold images only (very lightweight)
const CRITICAL_IMAGE_PATHS = [
  'src/assets/logo.png',
  'src/assets/artimasnav.png',
  'src/assets/bg_image.png',
  'src/assets/pillar.png',
  'src/assets/newartimas.webp',
  'src/assets/eventnames/satyug.png',
  'src/assets/eventnames/tretayug.png',
  'src/assets/eventnames/dwaparyug.png',
  'src/assets/eventnames/kalyug.png',
];

const CRITICAL_IMAGE_URLS = CRITICAL_IMAGE_PATHS.map((p) => getCloudinaryUrl(p));

let preloadingStarted = false;
let isPreloaded = false;

/**
 * Returns optimized media URL directly. Native HTML5 video streaming handles byte-range requests
 * far better than loading multi-megabyte Blobs into JS memory.
 */
export async function getCachedMediaUrl(url: string): Promise<string> {
  return url || '';
}

/**
 * Pre-caches media URLs gracefully without blocking network thread.
 */
export async function precacheMediaUrls(urls: string[]): Promise<Record<string, string>> {
  const results: Record<string, string> = {};
  for (const url of urls) {
    results[url] = url;
  }
  return results;
}

/**
 * Preloads essential lightweight UI images without choking the network bandwidth.
 */
export function startAssetPreloading(
  onProgress?: (loaded: number, total: number, percent: number) => void
): Promise<void> {
  if (preloadingStarted) {
    return Promise.resolve();
  }
  preloadingStarted = true;

  const total = CRITICAL_IMAGE_URLS.length;
  let loadedCount = 0;

  return new Promise<void>((resolve) => {
    if (total === 0) {
      isPreloaded = true;
      if (onProgress) onProgress(1, 1, 100);
      resolve();
      return;
    }

    const checkDone = () => {
      loadedCount++;
      const percent = Math.min(100, Math.round((loadedCount / total) * 100));
      if (onProgress) {
        onProgress(loadedCount, total, percent);
      }
      if (loadedCount >= total) {
        isPreloaded = true;
        resolve();
      }
    };

    CRITICAL_IMAGE_URLS.forEach((url) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = checkDone;
      img.onerror = checkDone;
      img.src = url;
    });
  });
}

export function isAssetsPreloaded(): boolean {
  return isPreloaded;
}

export default startAssetPreloading;

