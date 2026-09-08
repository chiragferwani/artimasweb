/**
 * Dedicated Cloudinary upload utility for registration payment screenshots.
 * Uses the dedicated Cloudinary account credentials provided for payments.
 */

async function sha1(str: string): Promise<string> {
  const enc = new TextEncoder();
  const hash = await crypto.subtle.digest('SHA-1', enc.encode(str));
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function uploadPaymentScreenshot(file: File): Promise<string> {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'exq0xlou';
  const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY || '625758234191985';
  const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET || 'BTUVaUD5abWa799TWRvdQTmc5rc';
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const folder = import.meta.env.VITE_CLOUDINARY_FOLDER || 'artimas_payments';

  // Cloudinary signature parameters in alphabetical order: folder, timestamp
  const signaturePayload = `folder=${folder}&timestamp=${timestamp}${apiSecret}`;
  const signature = await sha1(signaturePayload);

  const formData = new FormData();
  formData.append('file', file);
  formData.append('api_key', apiKey);
  formData.append('timestamp', timestamp);
  formData.append('folder', folder);
  formData.append('signature', signature);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || 'Failed to upload payment screenshot. Please try again.');
  }

  const result = await response.json();
  return result.secure_url;
}

export default uploadPaymentScreenshot;
