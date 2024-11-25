import { Router } from "express";
import {
  AllItineraries,
  ItinerariesByCity,
  ItinerariesById,
} from "../Controllers/itineraries/read.js";
import {
  createItinerary,
  createManyItineraries,
} from "../Controllers/itineraries/create.js";
import {update, updateMany} from "../Controllers/itineraries/update.js";
import { deleteItinerary } from "../Controllers/itineraries/delete.js";
import passport from "../Middlewares/Passport.js";

const router = Router();

router.get("/all",passport.authenticate('jwt', {session:false}), AllItineraries);
router.get("/city/:x",passport.authenticate('jwt', {session:false}), ItinerariesByCity);
router.get("/id/:x",passport.authenticate('jwt', {session:false}), ItinerariesById);
router.post("/create",passport.authenticate('jwt', {session:false}), createItinerary);
router.post("/createMany",passport.authenticate('jwt', {session:false}), createManyItineraries);
router.put("/update/:x",passport.authenticate('jwt', {session:false}), update);
router.put("/updateAll",passport.authenticate('jwt', {session:false}), updateMany);
router.delete("/delete/:x",passport.authenticate('jwt', {session:false}), deleteItinerary);

export default router;
