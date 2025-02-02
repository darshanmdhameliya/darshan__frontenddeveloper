import express, { Application, Request, Response } from 'express';
import userRouter from './routes/userRouter';
import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config({ path: "./.env" });

const port: string | number | undefined = process.env.PORT || 9900;
const hostName: string = "127.0.0.1";
const dburl: any = process.env.MONGO_DB_CLOUD_URL;
const dbName: string | undefined = process.env.MONGO_DB_DATABASE;

const app: Application = express();

app.get("/", (request: Request, response: Response) => {
    response.status(200);
    response.json({
        msg: "Welcome to Express Server"
    });
});


mongoose.connect(dburl, {
    dbName: dbName
}).then(() => {
    console.log('Database Connection is ready...');
}).catch((err) => {
    console.log(err);
})

//router Configuration
app.use("/api/users", userRouter);


// app.use("/api/users",darshanRouter);

app.listen(Number(port), hostName, () => {
    console.log(`Express Server is started at http://${hostName}:${port}`);
});

