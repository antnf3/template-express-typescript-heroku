import { Request, Response, NextFunction } from "express";

/* GET users listing. */
const users = (req: Request, res: Response, next: NextFunction) =>
  res.send("respond with a resource controllers-test");

export { users };
