import City from "../../Models/City.js";

let AllCities = async (req, res, next) => {
  try {
    let { name } = req.query;
    console.log(name);

    let query = {};
    if (name) {
      query.name = { $regex: "^" + name, $options: "i" };
    }
    let all = await City.find(query);
    return res.status(200).json({
      response: all,
    });
  } catch (error) {
    next(error);
  }
};

let citiesId = async (req, res, next) => {
  try {
    let id = req.params.id;
    let cities = await City.findById(id);
    return res.status(200).json({
      response: cities,
    });
  } catch (error) {
    next(error);
  }
};

export { AllCities, citiesId };
