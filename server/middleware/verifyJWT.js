import jwt from "jsonwebtoken";
import dataHandler from "./dataHandler.js";

const verifyJWT = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return next(dataHandler.customErrorHandler(401, "You are not authorized"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err)
      return next(dataHandler.customErrorHandler(403, "Forbidden access"));

    req.user = user;
    next();
  });
};

export default verifyJWT;
