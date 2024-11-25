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

let updateMany = async (req, res, next) => {
  try {
    await Itinerary.updateMany({
      likes : req.body.likes
    },{img: req.body.img})
    return res.status(200).json({
      success : true,
      response : 'update all'
    })
  }catch (e) {
    next(e)
  }
}



export { update ,updateMany};
