const fs = require('fs');
const path = require('path');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME || 'kxwxs8yo',
  api_key: process.env.VITE_CLOUDINARY_API_KEY || '449685882819593',
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET || 'G5NBStJdmZ8RXV9-tUFb5ROkNyk',
});

const ASSETS_DIR = path.join(__dirname, '../src/assets');
const MAPPING_FILE = path.join(__dirname, '../src/data/cloudinary_mapping.json');

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

(async function () {
  try {
    console.log('Starting Cloudinary Asset Upload...');
    const allFiles = getAllFiles(ASSETS_DIR);
    const mapping = {};

    let existingMapping = {};
    if (fs.existsSync(MAPPING_FILE)) {
      try {
        existingMapping = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));
      } catch (e) {}
    }

    for (let i = 0; i < allFiles.length; i++) {
      const filePath = allFiles[i];
      const relativePath = path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/');
      const ext = path.extname(filePath).toLowerCase();

      let resourceType = 'auto';
      if (['.mp4', '.webm', '.mov', '.avi'].includes(ext)) {
        resourceType = 'video';
      } else if (['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'].includes(ext)) {
        resourceType = 'image';
      }

      if (existingMapping[relativePath]) {
        console.log(`[${i + 1}/${allFiles.length}] Already uploaded: ${relativePath}`);
        mapping[relativePath] = existingMapping[relativePath];
        continue;
      }

      console.log(`[${i + 1}/${allFiles.length}] Uploading ${relativePath} (${resourceType})...`);

      const relativeWithoutExt = relativePath
        .replace(/^src\/assets\//, '')
        .replace(/\.[^/.]+$/, '')
        .replace(/[^a-zA-Z0-9_/.-]/g, '_');

      const publicId = `artimasweb/${relativeWithoutExt}`;

      if (['.json', '.txt'].includes(ext)) {
        continue;
      }

      try {
        let uploadResult;
        try {
          uploadResult = await cloudinary.uploader.upload(filePath, {
            public_id: publicId,
            resource_type: resourceType,
            overwrite: true,
            unique_filename: false,
          });
        } catch (retryErr) {
          uploadResult = await cloudinary.uploader.upload(filePath, {
            public_id: publicId,
            resource_type: 'auto',
            overwrite: true,
            unique_filename: false,
          });
        }

        mapping[relativePath] = uploadResult.secure_url;
        console.log(` -> Success: ${uploadResult.secure_url}`);
      } catch (err) {
        console.error(` -> Error uploading ${relativePath}:`, err.message);
      }
    }

    fs.mkdirSync(path.dirname(MAPPING_FILE), { recursive: true });
    fs.writeFileSync(MAPPING_FILE, JSON.stringify(mapping, null, 2), 'utf8');
    console.log(`\nUpload finished! Mapping saved to ${MAPPING_FILE}`);
  } catch (error) {
    console.error('Script failed:', error);
  }
})();
