import Itinerary from "../../Models/Itinerary.js";
import "../../Models/City.js";

let AllItineraries = async (req, res, next) => {
  try {
    let itineraries = await Itinerary.find().populate("city", "name").exec();
    return res.status(200).json({
      response: itineraries,
    });
  } catch (error) {
    next(error);
  }
};
let ItinerariesByCity = async (req, res, next) => {
  try {
    let param = req.params.x;
    let itineraries = await Itinerary.find().populate("city", "name").exec();
    let byCity = await itineraries.filter((res) => res.city.name == param);
    return res.status(200).json({
      response: byCity,
    });
  } catch (error) {
    next(error);
  }
};
let ItinerariesById = async (req, res, next) => {
  try {
    let ID = req.params.x;
    let itineraries = await Itinerary.findById(ID)
      .populate("city", "name")
      .exec();
    return res.status(200).json({
      response: itineraries,
    });
  } catch (error) {
    next(error);
  }
};

export { AllItineraries, ItinerariesByCity, ItinerariesById };
