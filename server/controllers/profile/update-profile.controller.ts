// update profile - "email", "username", ""

// import relelvant module
import { Response, Request } from "express";
import { QueryResult } from "pg";

// import db
import { db } from "../../db/connect";

// import email validate
import { validateEmail, validatePhoneNumber } from "../../validate/validate";

// types
import { profileQueryTypes } from "../../types/profile.types";

// update user profile information;
export const updateUserProfile = async(req:Request | any, res:Response) => {
    // if req.bdy is empty
    if(!req.body.email || !req.body.phone) {
        return res.status(400).json({
            message : "Fields cannot be empty"
        })
    }

    // get id from params
    const {userId} = req.params;

    // get values from body
    const {email, phone, username, interests } = req.body;

    try {
        // profile result
         const profileResult : QueryResult = await db.query(`
          UPDATE users
          SET email = $1, phone = $2, username = $3, interests = $4, updated_at = NOW()
          WHERE id = $5
          RETURNING *
         `, [email, phone, username, interests, userId]) 

         // if there is no profile result
         if (profileResult?.rows.length === 0) {
            return res.status(404).json({
                message : 'User not found'
            })
          }
          // return result
          return res.status(200).json({
            message : "user updated successfully",
            data : profileResult.rows[0]
          })
      }
     // catch error
     catch (err) {
        console.log(err.message);
        res.status(500).json({
            message : 'server error'
        });
    }
}