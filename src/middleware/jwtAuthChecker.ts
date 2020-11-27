import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

/**
 * jwtAuthChecker
 * @param req: Request
 * @param res: Response
 * @param next: NextFunction
 * @return void
 */
const jwtAuthChecker = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(`Bearer `)[1];
    jwt.verify(token, "", (err) => {
      if (err) {
        res.status(401).json({ error: `token error` });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ error: `no token` });
  }
};

export default jwtAuthChecker;
