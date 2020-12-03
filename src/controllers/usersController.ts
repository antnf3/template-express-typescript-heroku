import { Request, Response, NextFunction } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
/* GET users listing. */
const users = (req: Request, res: Response, next: NextFunction) =>
  res.send("respond with a resource controllers-test");

const login = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    console.log(user);
    if (!user) {
      // req.flash("loginError", info.message);
      // return res.redirect("/login");
      // res.status(401).json({ error: "login failed" });
    }

    // res.cookie('string', 'cookie');
    // res.cookie('json',{
    // 	name: 'cook',
    // 	proprety: 'deli'
    // });

    //  res.json({ token });

    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      // 클라이언트에게 JWT생성 후 반환
      const token = jwt.sign(user, "jwt-secret-key");
      console.log(token);

      res.json({ token: "Bearer " + token });
      // res.redirect("/");
    });
  })(req, res, next);
};

const signin = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("jwt", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    console.log("aaaaasdddfdfd", user);
    if (!user) {
      // req.flash("loginError", info.message);
      // return res.redirect("/login");
      res.status(401).json({ error: "login failed" });
    }

    // res.cookie('string', 'cookie');
    // res.cookie('json',{
    // 	name: 'cook',
    // 	proprety: 'deli'
    // });

    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      res.redirect("/");

      // const isLogined = req.isAuthenticated();
      // // console.log("isLogined:::::",isLogined);
      // res.writeHead(200, { "Content-Type": "application/json" });
      // var json = JSON.stringify({
      //   isLogined: isLogined
      // });
      // return res.end(json);
    });
  })(req, res, next);
};

const current = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("jwt", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.status(401).json({ error: "auth error" });
    }
    res.json(user);
  })(req, res, next);
};
export { users, login, signin, current };
