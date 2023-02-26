// import relevant module
import { Response, Request } from "express";

// import db
import { db } from "../../db/connect";
import { QueryResult } from "pg";

// import types
import { verifyQueryTypes } from "../../types/verify.types";

export const verifyAccount = async (req : Request, res : Response) => {
    // get code from params
    const {code} = req.params;

    try {
       //  check for verification if verification code is valid from db
         const checkifCodeQuery : verifyQueryTypes = {
            text : 'SELECT * FROM users WHERE verification_code = $1',
            values : [code]
        }
        const codeResult : QueryResult = await db.query(checkifCodeQuery)
        if(codeResult.rows.length === 0) {
            return res.status(400).json({
                message : "Invalid verification code"
            })
        }
       
        // update verified column to be verified;
        const updateVerificationStatus : verifyQueryTypes = {
             text : 'UPDATE users SET verified=true where verification_code = $1 RETURNING *',
             values : [code]
         }
       const userResult : QueryResult = await db.query(updateVerificationStatus); 
       const user = userResult.rows[0];
       
       // redirect if verified
       if(user?.verified) {
           return res.redirect('/profile')
       } else {
           res.status(400).json({
               message : "User is not verified"
           })
       }
    }catch(err) {
        console.log(err.message);
        res.status(500).json({
            message : 'server error'
        });
    }
}