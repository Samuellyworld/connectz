/// import relevant module
import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

// import db
import { db } from "../../db/connect";

// types
import { authQueryTypes } from "../../types/auth.types";
import { QueryResult } from "pg";

// validate
import { validateEmail, 
         validatePhoneNumber } from "../../validate/validate";
// import config
import { defaultConfig } from "../../config/config";

export const loginUser = async (req: Request, res : Response) => {
    // get from body
    const {identifier, password} = req.body
    // input validation
    if(!req.body.identifier || !req.body.password) {
        return res.status(400).json({
            message : "Fields cannot be empty"
        })
    }
   
    try {
        let query : string, values : string[];
        // validate email
        if(validateEmail(identifier)) {
            query = 'SELECT * FROM "users" WHERE email = $1',
            values = [identifier]
    
        }  else if(validatePhoneNumber(identifier)) {
           query = 'SELECT * FROM "users" WHERE phone = $1',
           values = [identifier]
        } else {
            return res.status(400).json({ 
                message: 'Invalid phone number or email' });
          }
        

       // check if the user email or phone number is correct;
        const result: QueryResult = await db.query(query, values);

         if (result.rowCount === 0) {
                return res.status(400).json({
                    message : "Phone Number or Email Address is not found"
                })
              }

        // user
        const user = result.rows[0]

        // is password valid
        const isMatch : boolean = await bcrypt.compare(password, user.password);

        // if password do not match
        if (!isMatch) {
             return res.status(400).json({
                    message : "Invalid Credentials"
                    })
         }
         const email : string = user?.email

           // create token
        const token = jwt.sign(
            {
            user_id : user.id, email
            },
           defaultConfig?.TOKEN, 
           {
            expiresIn: 360000
           }
        );

       // save user token
      user.token = token;

       // return user
          return res.status(201).json({
            message : `user login with id ${user.id}`, 
            data:  user,
           })
    } catch (err) {
         
    }

}