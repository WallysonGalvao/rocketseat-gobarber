import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');
export default {
  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(req, file, cb) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return cb(null, fileName);
    },
  }),
};
