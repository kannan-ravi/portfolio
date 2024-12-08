import dataHandler from "../middleware/dataHandler.js";
import profileModel from "../model/profile.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res, next) => {
  const { password, username } = req.body;
  try {
    const validUser = await profileModel.findOne({ username });

    if (!validUser) {
      return next(dataHandler.customErrorHandler(404, "Incorrect Credentials"));
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(dataHandler.customErrorHandler(401, "Incorrect Credentials"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expireDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
    res
      .cookie("token", token, { httpOnly: true, expires: expireDate })
      .status(200)
      .json(dataHandler.successHandler(rest, "Logged in Successfully"));
  } catch (err) {
    next(err);
  }
};

const passwordChange = async (req, res, next) => {
  const { new_password, current_password, username } = req.body;
  try {
    if (new_password !== "" && current_password !== "" && username !== "") {
      const validUser = await profileModel.findOne({ username: username });

      if (!validUser) {
        return next(
          dataHandler.customErrorHandler(404, "Couldn't find the user")
        );
      }

      const validPassword = bcrypt.compareSync(
        current_password,
        validUser.password
      );

      if (!validPassword) {
        return next(
          dataHandler.customErrorHandler(404, "Incorrect Credentials")
        );
      }

      const hashedPassword = await bcrypt.hash(new_password, 11);

      validUser.password = hashedPassword;
      await validUser.save();

      return res
        .status(200)
        .json(
          dataHandler.successHandler(
            null,
            "Your Password has been successfully changed"
          )
        );
    } else {
      next(dataHandler.customErrorHandler(422, "Please enter your password"));
    }
  } catch (error) {
    next(error);
  }
};

const logout = (req, res) => {
  res
    .clearCookie("token", { httpOnly: true, secure: true })
    .status(200)
    .json(dataHandler.successHandler(null, "Successsfully Logout"));
};

export default { login, passwordChange, logout };
