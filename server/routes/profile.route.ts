// import relevant module
import express, { Router } from "express";

// import relevant controllers
import { updateUserProfile } from "../controllers/profile/update-profile.controller";

// import middleware
import { authMiddleware } from "../middleware/middleware";

// create verify route
export const profileRouter : Router = express.Router();

//send verification token route
profileRouter.put('/profile', authMiddleware, updateUserProfile);
