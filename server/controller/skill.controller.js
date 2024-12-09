import dataHandler from "../middleware/dataHandler.js";
import skillModel from "../model/skill.model.js";

const createSkill = async (req, res, next) => {
  const { name, level, icon, color } = req.body;
  if (!name && !icon.name && !icon.library) {
    return next(
      dataHandler.customErrorHandler(422, "Please fill the necessary fields.")
    );
  }

  try {
    const existingSkill = await skillModel.findOne({ name });
    if (existingSkill) {
      return next(
        dataHandler.customErrorHandler(409, "The skill is already registered.")
      );
    }
    const newSkill = new skillModel({
      name,
      level,
      icon,
      color,
    });

    await newSkill.save();
    return res
      .status(200)
      .json(
        dataHandler.successHandler(newSkill, "Skill is successfully created")
      );
  } catch (error) {
    next(error);
  }
};

const getSkill = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return next(dataHandler.customErrorHandler(422, "'id' is required."));
  }

  try {
    const isSkillExist = await skillModel.findById({ _id: id });
    if (!isSkillExist) {
      return next(dataHandler.customErrorHandler(404, "Skill not found"));
    }

    res
      .status(200)
      .json(
        dataHandler.successHandler(isSkillExist, "Skill retrieved successfully")
      );
  } catch (error) {
    next(error);
  }
};

const updateSkill = async (req, res, next) => {
  const { name, level, icon, color } = req.body;
  const { id } = req.params;

  try {
    if (!id) {
      return next(dataHandler.customErrorHandler(422, "'id' is required."));
    }

    const skill = await skillModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name,
          level,
          icon,
          color,
        },
      },
      { new: true }
    );

    res
      .status(200)
      .json(dataHandler.successHandler(skill, "Successfully Updated"));
  } catch (error) {
    next(error);
  }
};

const getAllSkills = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const total = await skillModel.countDocuments();
    const skills = await skillModel.find().skip(skip).limit(limit);

    const data = {
      total,
      page,
      limit,
      totalPage: Math.ceil(total / limit),
      skills,
    };

    res
      .status(200)
      .json(dataHandler.successHandler(data, "Skills retrieved successfully"));
  } catch (error) {
    next(error);
  }
};

const deleteSkill = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) {
      return next(dataHandler.customErrorHandler(422, "'id' is required."));
    }

    const skill = await skillModel.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .json(dataHandler.successHandler(null, "Successfully Deleted"));
  } catch (error) {
    next(error);
  }
};

export default {
  createSkill,
  getSkill,
  updateSkill,
  getAllSkills,
  deleteSkill,
};
