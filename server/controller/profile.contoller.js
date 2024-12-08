import dataHandler from "../middleware/dataHandler.js";
import profileModel from "../model/profile.model.js";
import path from "path";
const __dirname = path.resolve();

const normalizePath = (file) => {
  const filePath = path.relative(
    path.join(__dirname, "server", "public"),
    file.path
  );
  const normalizedPath = filePath.replace(/\\/g, "/");
  return normalizedPath;
};

const updateProfile = async (req, res, next) => {
  console.log(req.files);
  try {
    const normalizedPathForLogo = req.files.logo
      ? normalizePath(req.files.logo[0])
      : null;
    const normalizedPathForProfile = req.files.profile_pic
      ? normalizePath(req.files.profile_pic[0])
      : null;

    const updatedData = {
      full_name: req.body.full_name,
      email: req.body.email,
      headline: req.body.headline,
      address: req.body.address,
      state: req.body.state,
      city: req.body.city,
      country: req.body.country,
      zipcode: req.body.zipcode,
    };

    if (normalizedPathForLogo) {
      updatedData.logo = normalizedPathForLogo;
    }
    if (normalizedPathForProfile) {
      updatedData.profile_pic = normalizedPathForProfile;
    }

    const userProfile = await profileModel.findOneAndUpdate(
      { username: req.body.username },
      { $set: updatedData },
      { new: true }
    );

    res
      .status(200)
      .json(
        dataHandler.successHandler(
          userProfile,
          "Profile has been updated successfully"
        )
      );
  } catch (error) {
    next(error);
  }
};

export default { updateProfile };
