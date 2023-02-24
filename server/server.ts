// import inbuilt http module;
import http from "http";

// import default config

// import app
import { app } from "./app";

// creating server
const server = http.createServer(app);

// server listen
server.listen(3000, () => {
    console.log(`Listening on port 3000`)
})