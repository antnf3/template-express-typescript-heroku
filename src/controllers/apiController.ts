import { Request, Response, NextFunction } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
/* GET users listing. */
const users = (req: Request, res: Response, next: NextFunction) =>
  res.send("respond with a resource controllers-test");

const sendMail = (req: Request, res: Response, next: NextFunction) => {
  res.send("sendMail");
};

export { sendMail };
