// import relevant module;
import { Response, Request } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { Vonage } from "@vonage/server-sdk";
import nodemailer from 'nodemailer';
import {v4} from "uuid";

// import config
import { defaultConfig, verificationConfig } from "../../config/config";
// import db
import { db } from "../../db/connect";
import { mailOptionstypes, verifyQueryTypes } from "../../types/verify.types";
import { QueryResult } from "pg";

// get a random string
// verify
export const sendVerificationCode = async (req : Request | any, res: Response) => {
   // get values from body
   const {verificationMethod, identifier} = req.body;
   if(!verificationMethod || !identifier) {
    return res.status(400).json({
        message : "Input the verification method or identifier"
    })
   }

   // get userid using auth token
   const userId = req.user?.user_id;
   
    try {
         if(verificationMethod === "phone") {
          
            // generate verification code
          const verificationCode = Math.floor(Math.random() * Math.pow(10, verificationConfig?.VERIFICATION_CODE_LENGTH)).toString();
          
          // update verification code from users table
          const updateVerifyQuery : verifyQueryTypes = {
              text : 'UPDATE users SET verification_code = $1 WHERE phone = $2 RETURNING *',
              values : [verificationCode, identifier]
          }
          //  the user
          const verifyResult : QueryResult = await db.query(updateVerifyQuery);
          const user = verifyResult.rows[0];
          if (!user) {
            return res.status(404).json({ 
                message: 'Please use the number you registered with' 
            });
          }
          console.log(user);
            // vonage
            const vonage = new Vonage({
                apiKey : defaultConfig?.APIkey,
                apiSecret : defaultConfig?.APIsecret
            } as any )

            // details
            const from : string = "Connectz APIs";
            const to : string = identifier;
            const text : string = `Your verification code is ${verificationCode}`;

            // send message
           await vonage.sms.send({to, from, text})
                 .then(resp => {
                     console.log('Message sent successfully'); console.log(resp);
                 })
                 .catch(err => {
                    console.log('There was an error sending the message.'); console.error(err);
                 })
                return res.status(200).json({
                      message: 'Message sent successfully' 
                    }
                     );

           } else if(verificationMethod === "email") {

              // generate a unique token
              const token : string = v4().substring(0,5);
              console.log(token)
              const updateVerifyQuery : verifyQueryTypes = {
                text : 'UPDATE users SET verification_code = $1 WHERE email = $2 RETURNING *',
                values : [token, identifier]
            }

            //  the user
            const verifyResult : QueryResult = await db.query(updateVerifyQuery);
            const user = verifyResult.rows[0];
            if (!user) {
              return res.status(404).json({ 
                  message: 'Please use the email you registered with' 
              });
            }

            // send a messsage
            const transport = nodemailer.createTransport({
                service : "gmail",
                auth: {
                    user : verificationConfig?.username,
                    pass : verificationConfig?.password
                }
            });

            // construct the email
            let sender = 'noreply@gmail.com'
            const mailOptions : mailOptionstypes = {
                from : sender,
                to: identifier,
                subject : "Verify your Connectz Account",
                html : `Press <a href=http://localhost:8000/api/v1/verify/:${token}> here </a> to verify your email, Thanks`
            }
           transport.sendMail(mailOptions, (err,resp) => {
               if (err) {
                   console.log(err)
                   return res.status(200).json({
                    message: 'Error sending message' 
                  }
                   );
               } else {
                   console.log(resp)
                return res.status(200).json({
                    message: 'Message sent successfully' 
                  }
                   );
               }
           })
           }
    } catch (error) {
         console.log(error.message);
        res.status(500).json({
            message : 'server error'
        });
    }
 

}