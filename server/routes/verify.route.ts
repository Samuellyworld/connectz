// import relevant module
import express, { Router } from "express";

// import relevant controllers
import { sendVerificationCode } from "../controllers/verification/send.controller";
import { verifyAccount } from "../controllers/verification/verify.controller";

// import middleware
import { authMiddleware } from "../middleware/middleware";

// create verify route
export const verifyRouter : Router = express.Router();

//send verification token route
verifyRouter.post('/verify/send', sendVerificationCode);

// confirm verification code
verifyRouter.put('/verify/:code', verifyAccount);