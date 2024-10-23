import City from "../../Models/City.js";

let createCity = async (req, res, next) => {
  try {
    let city = req.body;
    let create = await City.create(city);
    return res.status(201).json({
      response: create,
    });
  } catch (error) {
    next(error);
  }
};
let createCities = async (req, res, next) => {
  try {
    let cities = req.body;
    let create = await City.insertMany(cities);
    return res.status(201).json({
      response: create,
    });
  } catch (error) {
    next(error);
  }
};

export { createCity, createCities };
