// import relevant module;
import { Response, Request } from "express";
import twilio, { Twilio } from "twilio";
import nodemailer from 'nodemailer';
import {v4} from "uuid";
import jwt from "jsonwebtoken";

// import config
import { defaultConfig, verificationConfig } from "../../config/config";
// import db
import { db } from "../../db/connect";
import { mailOptionstypes, verifyQueryTypes } from "../../types/verify.types";
import { QueryResult } from "pg";
import { MessageInstance } from "twilio/lib/rest/api/v2010/account/message";

// verify
export const sendVerificationCode = async (req : Request | any, res: Response) => {
   // get values from body
   const {verificationMethod, identifier} = req.body;
   if(!verificationMethod || !identifier) {
    return res.status(400).json({
        message : "Fields cannot be empty"
    })
   }

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
    
            // sign a token
            const email : string = user?.email

            // create token
           const authToken = jwt.sign(
            {
            user_id : user.id, email
            },
            defaultConfig?.TOKEN, 
            {
             expiresIn: 360000
            }
            );

          // save user token
           user.token = authToken;

          if (!user) {
            return res.status(404).json({ 
                message: 'Please use the number you registered with' 
            });
          }
            // twilio
            const accountSid : string= defaultConfig?.AccountSid;
            const authKey : string = defaultConfig?.AuthToken;

            // start an instance
            const client : Twilio = twilio(accountSid, authKey);

            // details
            const from : string = "+12765308354";
            const to : string = identifier;
            const body : string = `Your Connectz Code is ${verificationCode}`;

            await client.messages.create({
                from : from,
                to : to,
                body : body
            }).then((message : MessageInstance) => {
                 console.log(message.sid)
                 console.log('Message sent successfully')
            })
            .catch(err => {
                console.log('There was an error sending the message.'); console.error(err);
             })
            // send message response
                return res.status(200).json({
                      message: 'Message sent successfully' ,
                      data : user
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

            // sign a token
            const email : string = user?.email

            // create token
           const authToken = jwt.sign(
            {
            user_id : user.id, email
            },
            defaultConfig?.TOKEN, 
            {
             expiresIn: 360000
            }
            );

          // save user token
           user.token = authToken;

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
                html : `Press <a href=https://connectz-server.herokuapp.com/api/v1/verify/${token}> here </a> to verify your email, Thanks`
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
                    message: 'Message sent successfully' ,
                    data : user
                  }
                   );
               }
           })
           } else {
            return res.status(400).json({
                message : "Invalid verification method"
            })
           }

    } catch (error) {
         console.log(error.message);
        res.status(500).json({
            message : 'server error'
        });
    }
}