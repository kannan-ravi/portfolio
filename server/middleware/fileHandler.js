import multer from "multer";
import path from "path";

const __dirname = path.resolve();
const storageForLogo = multer.diskStorage({
  destination: (req, file, cb) => {
    let folderPath;
    if (file.fieldname === "logo") {
      folderPath = path.join(__dirname, "server", "public", "img", "logo");
    } else if (file.fieldname === "profile_pic") {
      folderPath = path.join(__dirname, "server", "public", "img", "profile");
    } else {
      return cb(new Error("Invalid field name"), null);
    }
    return cb(null, folderPath);
  },

  filename: (req, file, cb) => {
    const fileName = `${Date.now()}${path.extname(
      file.originalname
    )}`;
    return cb(null, fileName);
  },
});

const upload = multer({ storage: storageForLogo });

export default { upload };
