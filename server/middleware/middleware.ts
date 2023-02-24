// importing relevant module
import jwt from 'jsonwebtoken';
import { Response, Request, NextFunction  } from 'express';

// import token from config
import { defaultConfig } from '../config/config';

// middleware - handle and verify token auth using jwt
export const authMiddleware = (req : Request | any, res : Response, next : NextFunction) => {
    // check for token
    const token : string = req.body.token || req.query.token || req.headers["x-access-token"];
  
    // if there is no token
    if (!token) {
        return res.status(403).json({
           message : "A token is required for authentication"
        });
      }

    try {
        // decode token 
         const decoded: string | jwt.JwtPayload = jwt.verify(token, defaultConfig?.TOKEN ) 
         // if there is no token
         if (!decoded) {
            return res.status(401).json({
                 message: 'Token is not valid, authorization denied'
             });
          } 
          // send user
        req.user = decoded;
      } catch (err) {
          // incase there is an error
        return res.status(401).json({
            message: "Invalid Token"
        })
      }
      // return
      return next();
}