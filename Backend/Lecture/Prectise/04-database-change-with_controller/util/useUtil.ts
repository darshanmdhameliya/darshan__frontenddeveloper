import path from "path"
import { IBooks } from "../models/IBooks"
const jsonfile = require("jsonfile")

export class userUtil {
    private static userJsonPath = path.join(__dirname, "..", "db", "books.json")

    public static getAllUsersDB(): Promise<IBooks[]> {
        return new Promise((resolve, rejects) => {
            jsonfile.readFile(this.userJsonPath, (err: any, data: any) => {
                if (err) {
                    rejects(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

}