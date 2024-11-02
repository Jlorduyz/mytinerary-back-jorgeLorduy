import Itinerary from "../../Models/Itinerary.js";

let createItinerary = async (req, res, next) => {
  try {
    let newItinerari = req.body;
    let itinerari = await Itinerary.create(newItinerari);
    return res.status(201).json({
      response: itinerari,
    });
  } catch (error) {
    next(error);
  }
};
let createManyItineraries = async (req, res, next) => {
  try {
    let newItineraries = req.body;
    let itinerari = await Itinerary.insertMany(newItineraries);
    return res.status(201).json({
      response: itinerari,
    });
  } catch (error) {
    next(error);
  }
};

export { createItinerary, createManyItineraries };
