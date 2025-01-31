import path, { resolve } from "path"
import { IBooks } from "../models/IBooks"
import { rejects } from "assert"
const jsonfile = require('jsonfile')


export class UserUtil {
    private static useJsonPath = path.join(__dirname, "..", "db", "books.json")

    public static getAllUserDB(): Promise<IBooks[]> {
            return new Promise((resolve , rejects)=>{
                jsonfile.readFile(this.useJsonPath , (err:any ,data:any)=>{
                    if(err){
                        rejects(err)
                    }else{
                        resolve(data)
                    }
                })
            })
    }
}