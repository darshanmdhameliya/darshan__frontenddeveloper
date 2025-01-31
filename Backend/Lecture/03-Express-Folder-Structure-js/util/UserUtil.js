import path from "path";
import jsonfile from "jsonfile"

export class UserUtil {

    static usersJsonPath = "E:/FullStack/Backend/Lecture/03-Express-Folder-Structure-js/db/users.json";

    static getAllUserFromDB() {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.usersJsonPath, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }

    // public static getUserFromDB(useId:number):Promise<IUser | underfined>{
    //     return new Promise((resolve,reject)=>{
    //         jsonfile.readfile(this.usersJsonPath, (err:string,data:any)=>{
    //                     if(err){
    //                         reject(err);
    //                     }else{
    //                        const userList:IUser[]= data;
    //                        const user:IUser | undefined = userList
    //                     }
    //         })
    // })
    // }
}



