import dataHandler from "../middleware/dataHandler.js";
// import mailHandler from "../middleware/mailHandler.js";
import contactAttemptModel from "../model/contact-attempt.model.js";

const saveContactAttempt = async (req, res, next) => {
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
      // const mailSender = await mailHandler(message, email);
      const saveData = new contactAttemptModel({
        name,
        email,
        message,
      });

      await saveData.save();
      return res
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

const getContactAttempt = async (req, res, next) => {
  try {
    const getContactAttempt = await contactAttemptModel.find();
    res.json(dataHandler.successHandler(getContactAttempt));
  } catch (error) {
    next(error);
  }
};

export default { saveContactAttempt, getContactAttempt };
