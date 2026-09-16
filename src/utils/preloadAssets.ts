import { getCloudinaryUrl } from './cloudinary';

// Critical above-the-fold images only (very lightweight with size/quality constraints)
const CRITICAL_IMAGE_CONFIGS: { path: string; width?: number; quality?: string }[] = [
  { path: 'src/assets/logo.png', width: 250 },
  { path: 'src/assets/artimasnav.png', width: 350 },
  { path: 'src/assets/bg_image.png', width: 1920, quality: 'auto:eco' },
  { path: 'src/assets/pillar.png', width: 1200, quality: 'auto:eco' },
  { path: 'src/assets/newartimas.webp', width: 800, quality: 'auto:eco' },
  { path: 'src/assets/eventnames/satyug.png', width: 400 },
  { path: 'src/assets/eventnames/tretayug.png', width: 400 },
  { path: 'src/assets/eventnames/dwaparyug.png', width: 400 },
  { path: 'src/assets/eventnames/kalyug.png', width: 400 },
];

const CRITICAL_IMAGE_URLS = CRITICAL_IMAGE_CONFIGS.map(({ path, width, quality }) =>
  getCloudinaryUrl(path, { width, quality: quality || 'auto', format: 'auto' })
);

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

