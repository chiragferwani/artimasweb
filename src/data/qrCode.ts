import getCloudinaryUrl from '../utils/cloudinary';

// Cloudinary hosted Artimas payment QR Code with fallback
export const qrCodeImg =
  getCloudinaryUrl('src/assets/qrcode.jpeg') ||
  'https://res.cloudinary.com/exq0xlou/image/upload/v1788887771/artimasweb/qrcode.jpg';

export default qrCodeImg;

