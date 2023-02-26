// update profile - "email", "username", ""

// import relelvant module
import { Response, Request } from "express";
import { QueryResult } from "pg";

// import db
import { db } from "../../db/connect";

// import email validate
import { validateEmail } from "../../validate/validate";

// types
import { profileQueryTypes } from "../../types/profile.types";

// update user profile information;
export const updateUserProfile = async(req:Request | any, res:Response) => {
    // if req.bdy is empty
    if(!req.body.type || !req.body.identifier) {
        return res.status(400).json({
            message : "Fields cannot be empty"
        })
    }
    // get user id from auth token
    const userId = req.user?.user_id;

    // get values from body
    const {type, identifier} = req.body;

    try {
        if(type === "username") {
         // check if new username is already in use;
         const checkNewUserNameQuery : profileQueryTypes = {
            text : 'SELECT * FROM users WHERE username = $1',
            values : [identifier]
         }
        // result from db
        const newUserNameResult : QueryResult = await db.query(checkNewUserNameQuery);
       // send a response if username exist
        if(newUserNameResult.rowCount > 0) {
            return res.status(400).json({
                message : 'username is already in use'
            })
        }
         // update the user's username in the database;
         const updateUsernameQuery : profileQueryTypes = {
             text :  'UPDATE users SET username = $1 WHERE id = $2',
             values : [identifier, userId]
         }
         // result
         const updateUsername: QueryResult = await db.query(updateUsernameQuery);
         if (updateUsername.rowCount === 0) {
            return res.status(400).json(
                {
                 message: 'Failed to update username' 
                });
         }
         res.status(200).json(
             { 
                message: 'Username updated successfully' 
             });
        } else if (type === "email") {

            // validate email address
          if(!validateEmail(identifier)) {
            return res.status(400).json({
            message : "Invalid Email Address"
           })
         }
            // check if the new email is already in use
         const checkNewEmailQuery : profileQueryTypes = {
            text : 'SELECT * FROM users WHERE Email = $1',
            values : [identifier]
         }
        // result from db
        const newEmailResult : QueryResult = await db.query(checkNewEmailQuery);
       // send a response if Email exist
        if(newEmailResult.rowCount > 0) {
            return res.status(400).json({
                message : 'Email Address is already in use'
            })
        }
         // update the user's Email in the database;
         const updateEmailQuery : profileQueryTypes = {
             text :  'UPDATE users SET Email = $1 WHERE id = $2',
             values : [identifier, userId]
         }
         // result
         const updateEmail: QueryResult = await db.query(updateEmailQuery);
         if (updateEmail.rowCount === 0) {
            return res.status(400).json(
                {
                 message: 'Failed to update Email' 
                });
         }
         res.status(200).json(
             { 
                message: 'Email updated successfully' 
             });
        }
  
    } catch (err) {
        
    }
}