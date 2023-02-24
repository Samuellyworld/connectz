// import relevant modules;
import express, {Response, Request} from "express";
import cors from "cors";
import morgan from "morgan";

// import routers;

// start an express server;
export const app = express();

// middlewares;
app.use(express.json());
app.use(morgan("combined"));
app.use(cors());

// start route
app.get("/", (req : Request, res : Response) => {
    res.json("Connectz test server is starting 🎈");
})