import express, { Application, Request, Response, Router } from 'express';
const jsonfile = require('jsonfile')
import path from "path"
import { IBooks } from '../models/IBooks';

const userRouter: Router = Router()

userRouter.get("/", (request: Request, response: Response) => {
    // response.json({
    //     msg: "Hello"
    // }); 
    const usersJsonPath = path.join(__dirname, "..", "db", "books.json");

    jsonfile.readFile(usersJsonPath, function (err: string, obj: IBooks) {
        if (err) console.error(err)
        response.json(obj)
    })

})

export default userRouter;