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

const getProfile = async (req, res, next) => {
  try {
    const profile = await profileModel.find();
    res.json(
      dataHandler.successHandler(profile, "Successfully Retrieved Profile")
    );
  } catch (error) {
    next(error);
  }
};

const updateprofile = async (req, res, next) => {
  try {
    const profileUpdate = await profileModel.findOneAndUpdate(
      {
        id: req.params.id,
      },
      {
        $set: {
          full_name: req.body.full_name,
          email: req.body.email,
          headline: req.body.headline,
          address: req.body.address,
          city: req.body.city,
          country: req.body.country,
          state: req.body.state,
          zipcode: req.body.zipcode,
          about_me: req.body.about_me,
        },
      }
    );

    res
      .status(200)
      .json(
        dataHandler.successHandler(
          profileUpdate,
          "Profile has been updated successfully"
        )
      );
  } catch (error) {
    next(error);
  }
};

export default { updateProfile, getProfile };
