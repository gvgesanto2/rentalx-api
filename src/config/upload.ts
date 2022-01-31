import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

export const defaultUploadPath = resolve(__dirname, "..", "..", "tmp");

export default {
  upload(folder = "") {
    return {
      storage: multer.diskStorage({
        destination: resolve(defaultUploadPath, folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const filename = `${fileHash}-${file.originalname}`;

          return callback(null, filename);
        },
      }),
    };
  },
};
