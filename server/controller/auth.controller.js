import dataHandler from "../middleware/dataHandler.js";
import authModel from "../model/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res, next) => {
  const { password, username } = req.body;
  try {
    const validUser = await authModel.findOne({ username });

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
      .json(dataHandler.successHandler(rest));
  } catch (err) {
    next(err);
  }
};

const logout = (req, res) => {
  res.clearCookie("token").status(200).json("Log Out Success");
};

export default { login, logout };
