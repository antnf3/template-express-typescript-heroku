// const LocalStrategy = require('passport-local').Strategy;
import passportJwt, { ExtractJwt } from "passport-jwt";
// const crypto = require('crypto');
// const conn = require('../db/conMySql.js');

const JwtStrategy = passportJwt.Strategy;

const jwt = (passport: any) => {
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: "jwt-secret-key",
      },
      (jwt_payload, done) => {
        console.log("jwt_payload", jwt_payload);
        try {
          if (true) {
            done(null, { jwt_payload });
          } else {
            done(null, false, { message: "승인 대기중입니다." });
          }
        } catch (error) {
          console.error("aaaaaaaaaaaa", error);
          done(error);
        }
      }
    )
  );
};

export default jwt;
