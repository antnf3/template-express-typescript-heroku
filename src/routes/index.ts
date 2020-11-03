import express, { Request, Response, NextFunction } from "express";
import { index } from "../controllers";
const router = express.Router();

/* GET home page. */
router.get("/", index);

export default router;
