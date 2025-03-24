import dataHandler from "../middleware/dataHandler.js";
import experienceModel from "../model/experience.model.js";

const createExperience = async (req, res, next) => {
  if (
    !req.body.company_name ||
    !req.body.company_website ||
    !req.body.position ||
    !req.body.worked_from ||
    !req.body.currently_working
  ) {
    return next(dataHandler.customErrorHandler(422, "All fields are required"));
  }
  try {
    const existingExperience = await experienceModel.findOne({
      company_name: req.body.company_name,
    });
    if (existingExperience) {
      dataHandler.customErrorHandler(409, "Experience already exists");
    }

    const newExperience = new experienceModel(req.body);
    await newExperience.save();
    return res
      .status(200)
      .json(
        dataHandler.successHandler(
          newExperience,
          "Experience created successfully"
        )
      );
  } catch (error) {
    next(error);
  }
};
const getExperience = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

export default { getExperience, createExperience };
