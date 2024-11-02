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
import { update } from "../Controllers/itineraries/update.js";
import { deleteItinerary } from "../Controllers/itineraries/delete.js";

const router = Router();

router.get("/all", AllItineraries);
router.get("/city/:x", ItinerariesByCity);
router.get("/id/:x", ItinerariesById);
router.post("/create", createItinerary);
router.post("/createMany", createManyItineraries);
router.put("/update/:x", update);
router.delete("/delete/:x", deleteItinerary);

export default router;
