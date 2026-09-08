import getCloudinaryUrl from '../utils/cloudinary';

// Cloudinary hosted Artimas payment QR Code with fallback
export const qrCodeImg = getCloudinaryUrl('src/assets/qrcode.jpeg') || 'https://res.cloudinary.com/kxwxs8yo/image/upload/v1788880000/artimasweb/qrcode.jpg';

export default qrCodeImg;
