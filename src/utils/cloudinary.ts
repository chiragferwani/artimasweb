import mappingData from '../data/cloudinary_mapping.json';

const mapping: Record<string, string> = mappingData as Record<string, string>;

export interface CloudinaryOptions {
  width?: number | string;
  height?: number | string;
  quality?: string;
  format?: string;
  videoCodec?: string;
  crop?: string;
  rawTransform?: string;
}

/**
 * Returns the Cloudinary URL for a relative asset path (e.g., 'src/assets/durga.png').
 * Applies Cloudinary transformation parameters for optimization.
 */
export function getCloudinaryUrl(assetPath: string, options?: CloudinaryOptions): string {
  if (!assetPath) return '';

  const cleanPath = assetPath.replace(/^(\/|\.\.\/|\.\/)+/, '');
  const withPrefix = cleanPath.startsWith('src/assets/') ? cleanPath : `src/assets/${cleanPath}`;
  const mappedUrl = mapping[withPrefix] || assetPath;

  if (!mappedUrl.startsWith('https://res.cloudinary.com/')) {
    return mappedUrl;
  }

  // Parse URL to inject transformations
  const isVideo = mappedUrl.includes('/video/upload/');
  const isImage = mappedUrl.includes('/image/upload/');

  if (!isVideo && !isImage) {
    return mappedUrl;
  }

  const transformations: string[] = [];

  if (isVideo) {
    // For video: f_auto,q_auto,vc_auto
    const format = options?.format || 'auto';
    const quality = options?.quality || 'auto';
    const videoCodec = options?.videoCodec || 'auto';
    
    transformations.push(`f_${format}`);
    transformations.push(`q_${quality}`);
    transformations.push(`vc_${videoCodec}`);
  } else {
    // For image: f_auto,q_auto
    const format = options?.format || 'auto';
    const quality = options?.quality || 'auto';
    
    transformations.push(`f_${format}`);
    transformations.push(`q_${quality}`);
  }

  if (options?.width) {
    transformations.push(`w_${options.width}`);
  }
  if (options?.height) {
    transformations.push(`h_${options.height}`);
  }
  if (options?.crop) {
    transformations.push(`c_${options.crop}`);
  }
  if (options?.rawTransform) {
    transformations.push(options.rawTransform);
  }

  const transformStr = transformations.join(',');
  if (transformStr) {
    // Inject the transformation string after /upload/
    const uploadMarker = '/upload/';
    const index = mappedUrl.indexOf(uploadMarker);
    if (index !== -1) {
      const insertPos = index + uploadMarker.length;
      return mappedUrl.slice(0, insertPos) + transformStr + '/' + mappedUrl.slice(insertPos);
    }
  }

  return mappedUrl;
}

export const CLOUDINARY_URLS = mapping;

export default getCloudinaryUrl;
