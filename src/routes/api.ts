import express, { Request, Response, NextFunction } from "express";
import { sendMail } from "../controllers/apiController";
import { jwtAuthChecker } from "../middleware";
const router = express.Router();

/* POST api listing. */
router.post("/v1/sendmail", jwtAuthChecker, sendMail);

export default router;
