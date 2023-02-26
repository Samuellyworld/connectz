// import relevant modules;
import express, {Response, Request} from "express";
import cors from "cors";
import morgan from "morgan";


// import routers;
import { authRouter } from "./routes/auth.route";
import { verifyRouter } from "./routes/verify.route";
import { profileRouter } from "./routes/profile.route";
import { passwordRouter } from "./routes/password.route";

// start an express server;
export const app = express();

// middlewares;
app.use(express.json());
app.use(morgan("combined"));
app.use(cors());

// start route
app.get("/", (req : Request, res : Response) => {
    res.json("Connectz test server is starting 🎈");
});

// user auth endpoint
app.use('/api/v1/user', authRouter);

// verify route
app.use('/api/v1', verifyRouter);

// profile route
app.use('/api/v1/user', profileRouter);

// password route
app.use('/api/v1/user', passwordRouter);
