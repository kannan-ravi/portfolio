import dataHandler from "../middleware/dataHandler.js";
import contactAttemptModel from "../model/contact-attempt.model.js";

const saveContactAttempt = async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return next(
      dataHandler.customErrorHandler(422, "Please fill the necessary details")
    );
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
            saveData,
            "Your message has been successfully received"
          )
        );
    }
  } catch (error) {
    next(error);
  }
};

const getAllContactAttempt = async (req, res, next) => {
  try {
    const getContactAttempt = await contactAttemptModel.find();
    res.json(
      dataHandler.successHandler(
        getContactAttempt,
        "Successfully Retrieved Contact"
      )
    );
  } catch (error) {
    next(error);
  }
};

const getSingleContactAttempt = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return next(dataHandler.customErrorHandler(422, "'id' is missing"));
  }

  try {
    const getSingleContactAttempt = await contactAttemptModel.findById(id);

    if (!getSingleContactAttempt) {
      return next(
        dataHandler.customErrorHandler(404, "Contact Attempt not found")
      );
    }

    res
      .status(200)
      .json(
        dataHandler.successHandler(
          getSingleContactAttempt,
          "Successfully Retrieved"
        )
      );
  } catch (error) {
    next(error);
  }
};

const deleteContactAttempt = async (req, res, next) => {
  try {
    const deleteContactAttempt = await contactAttemptModel.findByIdAndDelete({
      _id: req.params.id,
    });
    res
      .status(200)
      .json(dataHandler.successHandler(null, "Successfully Deleted"));
  } catch (error) {
    next(error);
  }
};

export default {
  saveContactAttempt,
  getAllContactAttempt,
  deleteContactAttempt,
  getSingleContactAttempt,
};
