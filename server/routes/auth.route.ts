// import relevant modules;
import express, { Router } from 'express';

// import relevant controllers related to auth and user;
import { registerUser } from '../controllers/auth/register.controller';
import { loginUser } from '../controllers/auth/login.controller';


// middleware
import { authMiddleware } from '../middleware/middleware';

// create users route;
export const authRouter : Router = express.Router();

// create/register a user;
authRouter.post('/register', registerUser);

// login/sign in a user
authRouter.post('/login', loginUser);


