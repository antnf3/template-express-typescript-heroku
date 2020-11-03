import { Request, Response, NextFunction } from "express";

/* GET home page. */
const index = (req: Request, res: Response, next: NextFunction) =>
  res.render("index", { title: "Express244422" });
// res.json({ test: 1234 });
export { index };
