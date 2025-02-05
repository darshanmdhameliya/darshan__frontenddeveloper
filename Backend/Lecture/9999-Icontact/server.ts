import express, { Application, Request, Response } from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./router/useRouter";
dotenv.config({ path: './.env' })

const hostName: string = "127.0.0.1"
const port: string | number | undefined = process.env.PORT || 9999;
const dbUrl: any = process.env.MONGO_DB_CLOUD_URL
const dbName: string | undefined = process.env.MONGO_DB_DATABASE

mongoose.connect(dbUrl, {
    dbName: dbName
}).then(() => {
    console.log('Database connect is ready...');
}).catch((error) => {
    console.log(error);
})  


const app: Application = express()


app.get('/', (request: Request, response: Response) => {
    response.json({
        msg: "Server Started"   
    })
})


app.use("/api/users",userRouter)

app.listen(Number(port), hostName, () => {
        console.log(`Express server started at http://${hostName}:${port}`);
})

