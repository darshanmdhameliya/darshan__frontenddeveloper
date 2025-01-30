import express, { Application, Request, Response } from "express"
import userRouter from "./routes/userRouter"

const hostName: string = "127.0.0.1"
const port: number = 8888

const app: Application = express()

app.get("/", (request: Request, response: Response) => {
    response.json({
        msg: "Server is started"
    })
})

app.use("/api/users", userRouter)

app.listen(port, hostName, () => {
    console.log(`Express Server Started at http://${hostName}:${port}`);

})