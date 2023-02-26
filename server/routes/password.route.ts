// import relevant module
import express, { Router } from "express";

// import relevant controllers
import { changePassword } from "../controllers/password/change.controller";

// import middleware
import { authMiddleware } from "../middleware/middleware";

// create verify route
export const passwordRouter : Router = express.Router();

//send verification token route
passwordRouter.post('/password', authMiddleware, changePassword);
