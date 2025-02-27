import express, { Application, Request, Response } from "express"
import groupRouter from "./router/groupRouter"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({ path: "./.env" })


const port: number | string | undefined = process.env.PORT || 9999
const dburl: any = process.env.MONGO_DB_CLOUD_URL
const dbName: string | undefined = process.env.MONGO_DB_DATABASE

const app: Application = express()

app.get("/", (request: Request, response: Response) => {
    response.json({
        msg: "Server Started"
    })
})

//configure the routers
app.use(express.json())
// app.use(express.urlencoded({extended:false}))
app.use("/group" , groupRouter)

if (port) {
    app.listen(Number(port), () => {
        if (dburl && dbName) {  
            mongoose.connect(dburl, {
                dbName: dbName
            }).then((dbResponse) => {
                console.log("Connection Established..." );
            }).catch((error) => {
                console.log(error);
                process.exit(0); // Force stop express server
            })
        }
        console.log(`Express Server started at ${port}`);
    })
}