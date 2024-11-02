import { Router } from "express";
import cityRouter from "./cities.js";
import itinerariesRouter from "./itineraries.js";

const router = Router();

router.use("/cities", cityRouter);
router.use("/itineraries", itinerariesRouter);

export default router;
