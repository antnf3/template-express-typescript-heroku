import { PassportStatic } from "passport";
import local from "./localStrategy";
import jwt from "./jwtStrategy";
const passConfig = (passport: PassportStatic) => {
  passport.serializeUser((user: any, done: any) => {
    //Stratety 성공시 호출도림
    //console.log('serializeUser');
    //console.log(user);
    done(null, user); // 여기의 user 가 deserializeUser의 첫번째 매개변수로 이동
  });

  passport.deserializeUser((user: any, done: any) => {
    // 매개변수 user는 serializeUser의 done의 인자 user를 받은것
    done(null, user); // 여기의 user가 req.user가 됨.
  });

  local(passport);
  jwt(passport);
};

export default passConfig;
