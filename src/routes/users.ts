import express, { Request, Response, NextFunction } from "express";
import { users } from "../controllers/usersController";
const router = express.Router();

/* GET users listing. */
router.get("/", users);

export default router;
