// import relevant module
import {Response, Request} from 'express';
import bcrypt from 'bcrypt';

// import db
import { db } from '../../db/connect';
import { QueryResult } from 'pg';

// import types
import { passwordQueryTypes } from '../../types/password.types';

// update password
export const updatePassword = async (req: Request | any, res: Response ) => {
   
     // input validation
     if(!req.body.password) {
        return res.status(400).json({
            message : "Fields cannot be empty"
        })
    }
    // get values from body
    const {password} = req.body;

    // user id
    const userId = req?.user_id
    console.log(req.user)
    try {
       // passsword query
       const passwordQuery:passwordQueryTypes = {
        text : 'SELECT * FROM users WHERE id = $1',
        values : [userId]
      }
      // password result
     const passwordResult:QueryResult = await db.query(passwordQuery);

     // if user id does not exist
    if(passwordResult.rowCount === 0) {
       return res.status(400).json({
           message : 'User not found'
       })
    }

    // user 
    const user = passwordResult.rows[0];

     // hash the new password and update the user's password in the database;
     const salt : string = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password, salt);

       // update result
       const updateQuery : passwordQueryTypes = {
        text : 'UPDATE users SET password = $1 WHERE id = $2',
        values : [hashedPassword, userId]
    }
    const updateResult : QueryResult = await db.query(updateQuery);

    //if there is an error
    if(updateResult.rowCount === 0) {
        return res.status(400).json({
            message : "Failed to update password"
        })
    }
    // send a final response if everything works succesfully
    return res.status(200).json({
        message : "Password updated successfully"
    })
    } catch (err) {
       console.log(err.message);
       res.status(500).json({
            message : 'server error'
        });
    }
}