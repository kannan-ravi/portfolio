import dataHandler from "../middleware/dataHandler.js";
import authModel from "../model/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginController = async (req, res, next) => {
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

// const registerController = async (req, res) => {
//   const { username, password } = req.body;
//   const saltRounds = 11;
//   const hashedPassword = await bcrypt.hash(password, saltRounds);
//   const newUser = new authModel({
//     username,
//     password: hashedPassword,
//   });

//   try {
//     await newUser.save();
//     res.status(200).json({
//       success: true,
//       Message: "User Has Been Succesfully Created",
//     });
//   } catch (err) {
//     next(err);
//   }
// };

export default { loginController };
