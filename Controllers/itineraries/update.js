import Itinerary from "../../Models/Itinerary.js";

let update = async (req, res, next) => {
  try {
    let newVersion = await Itinerary.findByIdAndUpdate(req.params.x, req.body, {
      new: true,
    });
    return res.status(200).json({
      response: newVersion,
    });
  } catch (error) {
    next(error);
  }
};

export { update };
