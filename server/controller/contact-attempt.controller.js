import dataHandler from "../middleware/dataHandler.js";
import contactAttemptModel from "../model/contact-attempt.model.js";

const saveContactAttemptController = async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name) {
    return next(dataHandler.customErrorHandler(422, "Name is Missing"));
  }

  if (!email) {
    return next(dataHandler.customErrorHandler(422, "Email is Missing"));
  }

  if (!message) {
    return next(dataHandler.customErrorHandler(422, "Message is Missing"));
  }

  try {
    if (name && email && message) {
      const saveData = new contactAttemptModel({
        name,
        email,
        message,
      });

      await saveData.save();
      res
        .status(200)
        .json(
          dataHandler.successHandler(
            "Your message has been successfully received"
          )
        );
    }
  } catch (error) {
    next(error);
  }
};

export default { saveContactAttemptController };
