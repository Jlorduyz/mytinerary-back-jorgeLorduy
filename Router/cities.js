import { Router } from "express";
import { AllCities, citiesId } from "../Controllers/cities/read.js";
import { createCity, createCities } from "../Controllers/cities/create.js";
import passport from "../Middlewares/Passport.js";

const router = Router();

router.get("/all",passport.authenticate('jwt', {session:false}), AllCities);
router.get("/id/:id",passport.authenticate('jwt', {session:false}), citiesId);
router.post("/create",passport.authenticate('jwt', {session:false}), createCity);
router.post("/createMany",passport.authenticate('jwt', {session:false}), createCities);

export default router;
