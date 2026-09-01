import { getCloudinaryUrl } from './cloudinary';
import mappingData from '../data/cloudinary_mapping.json';

const ALL_CLOUDINARY_URLS = Array.from(
  new Set(Object.keys(mappingData).map((key) => getCloudinaryUrl(key)))
);

let preloadingStarted = false;
let isPreloaded = false;

/**
 * Preloads all Cloudinary images and videos into browser HTTP cache.
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
        const video = document.createElement('video');
        video.preload = 'auto';
        video.src = url;
        
        const cleanup = () => {
          video.oncanplaythrough = null;
          video.onerror = null;
        };

        video.oncanplaythrough = () => {
          cleanup();
          handleLoaded();
          resolve();
        };

        video.onerror = () => {
          cleanup();
          handleLoaded();
          resolve();
        };

        video.load();
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
