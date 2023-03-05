// import relevant module
import express, { Router } from "express";

// import relevant controllers
import { updateUserProfile } from "../controllers/profile/update-profile.controller";
import { getUserProfile } from "../controllers/profile/get-profile.controller";

// import middleware
import { authMiddleware } from "../middleware/middleware";

// create verify route
export const profileRouter : Router = express.Router();

// update profile route
profileRouter.put('/profile/:userId', authMiddleware, updateUserProfile);

// get profile route
profileRouter.get('/profile', authMiddleware, getUserProfile);

