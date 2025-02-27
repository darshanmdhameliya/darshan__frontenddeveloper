import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({});

const hostName: string = "127.0.0.1";
const port: string | number | undefined = process.env.PORT || 9787;
const dbUrl: any = process.env.MONGO_DB_CLOUD_URL;
const dbName: string | undefined = process.env.MONGO_DB_DATABASE;
const app: Application = express();


app.get("/", (request: Request, response: Response) => {
  response.status(200).json({
    msg: "welcome to express server",
  });
});

// configure the routers
import groupRouter from "./router/groupRouter";
import userRouter from "./router/userRouter";
import ContactRouter from "./router/contactRouter";

/**
@usage : to get all groups
@methodm: GETs
@params : no-params
@url : http://localhost:9999/groups
*/

app.use(express.json());
app.use("/groups", groupRouter);

/**
@usage : to get all Users
@methodm: GET
@params : no-params
@url : http://localhost:9999/users
*/

app.use(express.json());
app.use("/user",userRouter)

/**
@usage : to get all Users
@methodm: GET
@params : no-params
@url : http://localhost:9999/contact
*/

app.use(express.json());
app.use("/contact", ContactRouter);


if (port) {
  app.listen(Number(port), () => {
    if (dbUrl && dbName) {
      mongoose
        .connect(dbUrl, { dbName: dbName })
        .then((dbResponse) => {
          // console.log("Connection Established...", dbResponse);
          console.log("Connection Established...");
        })
        .catch((error) => {
          console.log(error);
          process.exit(0); // force stop express server
        });
    }
    console.log(`Expresss server started http://${hostName}:${port}`);
  });
}
