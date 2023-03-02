// import relevant module
import express, { Router } from "express";

// import relevant controllers
import { sendVerificationCode } from "../controllers/verification/send.controller";
import { verifyAccount } from "../controllers/verification/verify.controller";

// create verify route
export const verifyRouter : Router = express.Router();

//send verification token route
verifyRouter.post('/verify/send', sendVerificationCode);

// confirm verification code
verifyRouter.get('/verify/:code', verifyAccount);