import express, { Application, Request, response, Response } from "express";
import userRouter from "./router/userRouter";

const hostName: string = "127.0.0.1"
const port: number = 9999


const app: Application = express()

app.get("/", (request: Request, response: Response) => {
    response.json({
        msg: "Server started"
    })
})

app.use("/api/users",userRouter)

app.listen(port, hostName, () => {
    console.log(`Express server started at http://${hostName}:${port}`);
})