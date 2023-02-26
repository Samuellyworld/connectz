// import relevant modules;
import { Response, Request } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// import types
import { authQueryTypes } from "../../types/auth.types";

// import config jwt token
import { defaultConfig} from "../../config/config";

// import db
import { db } from "../../db/connect";
import { QueryResult } from "pg";

// validattion functions
import { validateEmail, validatePhoneNumber } from "../../validate/validate";

// create user;
export const registerUser = async ( req : Request, res : Response) => {
     // validate
     if(!req.body.username || !req.body.password) {
        return res.status(400).json({
            message : "Fields cannot be empty"
        })
     }
     // get value from body
    const {username, email, 
           phoneNumber, password, interests
         } = req.body
     
    // validate email address
    if(!validateEmail(email)) {
        return res.status(400).json({
            message : "Invalid Email Address"
        })
    }

    // validate phone number
    if(!validatePhoneNumber(phoneNumber)) {
        return res.status(400).json({
            message : "Invalid Phone Number"
        })
    }
    
    try { 
        // check if the user email or phone number is already registered;
        const checkEmailExistsQuery : authQueryTypes = {
            text : 'SELECT * FROM "users" WHERE email = $1',
            values : [email]
        }
        // send a response if email already exist in db
        const checkIfEmailExist : QueryResult= await db.query(checkEmailExistsQuery);
         if (checkIfEmailExist.rowCount > 0) {
                return res.status(400).json({
                    message : "Email Address already exists"
                })
              }
        // check if phone number exist in db
        const checkPhoneNumberExistsQuery : authQueryTypes = {
            text : 'SELECT * FROM "users" WHERE phone = $1',
            values : [phoneNumber]
        }

        // send a response if phone number exist in db
        const checkIfPhoneExist : QueryResult = await db.query(checkPhoneNumberExistsQuery);
        if (checkIfPhoneExist.rowCount > 0) {
            return res.status(400).json({
                message : "Phone Number already exists"
            })
          }
    
        // create an hash for the password;
        const salt : string = await bcrypt.genSalt(10);
        const hashedPassword : string= await bcrypt.hash(password, salt);

        // save the users details
        const createUserQuery : authQueryTypes = {
            text: 'INSERT INTO "users" (email, username, password, phone, interests) VALUES($1, $2, $3, $4, $5) RETURNING *',
            values: [email, username, hashedPassword, phoneNumber, interests]
        };
       const createUserResult : QueryResult = await db.query(createUserQuery);
       const user = createUserResult.rows[0];
        
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

        // send a response of the newly create user id
        return res.status(201).json({
            message : `user created with id ${user.id}`, 
            data:  user,
           })

    } catch(err) {
        // if there is an error
        console.log(err.message);
        res.status(500).json({
            message : 'server error'
        });
    }
}