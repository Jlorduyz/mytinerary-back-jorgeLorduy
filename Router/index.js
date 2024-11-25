import { Router } from "express";
import cityRouter from "./cities.js";
import itinerariesRouter from "./itineraries.js";
import authRouter from "./auth.js";
import userRoutes from "./users.js";

const router = Router();

router.use("/cities", cityRouter);
router.use("/itineraries", itinerariesRouter);
router.use('/auth', authRouter);
router.use('/user', userRoutes);

export default router;
