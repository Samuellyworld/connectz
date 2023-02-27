// import relevant module;
import { Response, Request } from "express";

// import db
import { db } from "../../db/connect";
import { QueryResult } from "pg";

// import passwordTypes
import { passwordQueryTypes } from "../../types/password.types";
import { verifyQueryTypes } from "../../types/verify.types";

export const forgotPassword = async (req : Request, res: Response) => {
    // get code from params
    const {code} = req.params;

    try {
         // check if code is valid from db
         const checkifCodeQuery :verifyQueryTypes = {
            text : 'SELECT * FROM users WHERE verification_code = $1',
            values : [code]
         }
         const codeResult : QueryResult = await db.query(checkifCodeQuery)
        if(codeResult.rows.length === 0) {
            return res.status(400).json({
                message : "Invalid Code"
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
                // update with hosted link
             return res.redirect('/passwordPage')
        } else {
                res.status(400).json({
                    message : "User is not verified"
            })
         }

     }
    catch(err) {
        console.log(err.message);
        res.status(500).json({
            message : 'server error'
        });
    }
}
