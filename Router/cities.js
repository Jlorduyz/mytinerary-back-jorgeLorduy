import { Router } from "express";
import { AllCities, citiesId } from "../Controllers/cities/read.js";
import { createCity, createCities } from "../Controllers/cities/create.js";

const router = Router();

router.get("/all", AllCities);
router.get("/id/:id", citiesId);
router.post("/create", createCity);
router.post("/createMany", createCities);

export default router;
