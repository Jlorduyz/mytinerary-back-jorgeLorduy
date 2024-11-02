import Itinerary from "../../Models/Itinerary.js";

let deleteItinerary = async (req, res, next) => {
  try {
    let del = await Itinerary.findByIdAndDelete(req.params.x);

    return res.status(200).json({
      response: del,
    });
  } catch (error) {
    next(error);
  }
};

export { deleteItinerary };
