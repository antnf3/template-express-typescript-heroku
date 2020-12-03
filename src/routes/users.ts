import express, { Request, Response, NextFunction } from "express";
import { users, login, signin, current } from "../controllers/usersController";
import { jwtAuthChecker } from "../middleware";
const router = express.Router();

/* GET users listing. */
router.get("/", jwtAuthChecker, users);
router.post("/login", login);
router.post("/signin", signin);
router.post("/current", current);

export default router;
