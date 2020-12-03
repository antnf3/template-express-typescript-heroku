// const LocalStrategy = require('passport-local').Strategy;
import passportLocal from "passport-local";
// const crypto = require('crypto');
// const conn = require('../db/conMySql.js');

const LocalStrategy = passportLocal.Strategy;

const local = (passport: any) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "id",
        passwordField: "pwd",
      },
      async (id, pwd, done) => {
        try {
          if (true) {
            done(null, { id, pwd });
          } else {
            done(null, false, { message: "승인 대기중입니다." });
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};

// // encrypt password
// function gfnSetEncPwd(originPwd, salt) {
// 	return new Promise((resolve, reject) => {
// 		crypto.pbkdf2(originPwd, salt, 102368, 64, 'sha512', (err, key) => {

// 			if (err) {
// 				reject(err);
// 			} else {
// 				//req.body.inData.PASSWORD = key.toString('base64');
// 				//req.body.inData.SALT = salt;
// 				var encPwd = key.toString('base64');
// 				resolve(encPwd);
// 			}
// 		});
// 	});
// }

export default local;
