// import relelvant module
import { Response, Request } from "express";


// import db
import { db } from "../../db/connect";
import { QueryResult } from "pg";
import { profileQueryTypes } from "../../types/profile.types";

//get user profile controller
export const  getUserProfile = async (req:Request |any, res:Response) => {
  
    // get id from auth
    const userId = req?.user.user_id;

    try {
       // check if user id exist
       const userQuery : profileQueryTypes = {
           text : 'SELECT * FROM users WHERE id = $1',
           values : [userId]
       }
       // result
       const userResult : QueryResult = await db.query(userQuery);
       // if user doesn't exist
       if(userResult.rowCount === 0) {
           return res.status(400).json({
               message : "User Profile not Found"
           })
       }
       const user = userResult.rows[0]
       // send a Response
       return res.status(200).json({
           message : "User Profile Found",
           data : user
       })
    }
    catch(err) {
        console.log(err.message);
        res.status(500).json({
            message : 'server error'
        });
    }
} 