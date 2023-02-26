// import relevant module
import express, { Router } from "express";

// import relevant controllers
import { sendVerificationCode } from "../controllers/verification/send.controller";

// import middleware
import { authMiddleware } from "../middleware/middleware";

// create verify route
export const verifyRouter : Router = express.Router();

//send verification token route
verifyRouter.post('/verify/send', authMiddleware, sendVerificationCode);