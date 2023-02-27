// import relevant module
import express, { Router } from "express";

// import relevant controllers
import { changePassword } from "../controllers/password/change.controller";
import { forgotPassword } from "../controllers/password/forgot.controller";
import { updatePassword } from "../controllers/password/update.controller";

// import middleware
import { authMiddleware } from "../middleware/middleware";

// create password route
export const passwordRouter : Router = express.Router();

//change password route
passwordRouter.post('/password', authMiddleware, changePassword);

// forgot password
passwordRouter.put('/forgot/:code', forgotPassword );

//update passowrd
passwordRouter.post('/password/update', authMiddleware, updatePassword);
