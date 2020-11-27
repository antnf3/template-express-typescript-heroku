import express, { Request, Response, NextFunction } from "express";
import { users } from "../controllers/usersController";
import { jwtAuthChecker } from "../middleware";
const router = express.Router();

/* GET users listing. */
router.get("/", jwtAuthChecker, users);

export default router;
