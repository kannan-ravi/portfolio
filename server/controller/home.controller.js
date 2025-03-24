import dataHandler from "../middleware/dataHandler.js";
import profileModel from "../model/profile.model.js";
import skillModel from "../model/skill.model.js";

const getHomeData = async (req, res, next) => {
  try {
    const profile = await profileModel.find(
      {},
      {
        _id: 0,
        username: 0,
        password: 0,
        created_at: 0,
        updated_at: 0,
        __v: 0,
        address: 0,
        city: 0,
        country: 0,
        state: 0,
        zipcode: 0,
      }
    );

    const responseData = { profile };

    res.json(
      dataHandler.successHandler(
        responseData,
        "Successfully retrieved profile data"
      )
    );
  } catch (error) {
    next(error);
  }
};

export default { getHomeData };
