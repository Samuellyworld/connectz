// import relevant modules;
import express from 'express';

// import relevant controllers related to auth and user;
import { registerUser } from '../controllers/auth/register.controller';

// create users route;
export const authRouter = express.Router();

// create/register a user;
authRouter.post('/register', registerUser);

