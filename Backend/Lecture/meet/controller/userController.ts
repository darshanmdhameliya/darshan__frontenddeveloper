import { Request, Response } from "express";
import mongoose from "mongoose";
import UserTable from "../database/UserSchema";
import { IUser } from "../models/IUser";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import gravatar from "gravatar";
import { validationResult } from "express-validator";
import { error } from "console";

export const getAllUser = async (request: Request, response: Response) => {
  try {
    let user: IUser[] | undefined = await UserTable.find();
    if (user) {
      return response.status(200).json(user);
    }
  } catch (err: any) {
    return response.status(500).json({
      msg: "Data not found",
    });
  }
};

export const getUser = async (request: Request, response: Response) => {
  let { userId } = request.params;
  const mongouserId = new mongoose.Types.ObjectId(userId);
  let theuser: IUser | undefined | null = await UserTable.findById(mongouserId);
  if (!theuser) {
    return response.status(500).json({
      data: null,
      error: "No user is found",
    });
  }
  return response.status(200).json(theuser);
};

export const registerUser = async (request: Request, response: Response) => {
  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response.status(400).json({errors: errors.array()})
  }
  try {
    //read the form data
    let { username,email, password } = request.body;

    // check if the user is exists
    const userObj = await UserTable.findOne({email:email});
    if(userObj){
      return response.status(400).json({
        error:"The user is already exists"
      })
    }

    //password `  
  } catch (error: any) {
    return response.status(500).json({
      error: error.message,
    });
  }
  // let { username,email, password , imageUrl , isAdmin } = request.body;
  // let  theuser : IUser | undefined | null  = await new UserTable({
  //     username:username,
  //     email:email,
  //     password:password,
  //     imageUrl:imageUrl,
  //     isAdmin:isAdmin
  // }).save();
  // if(theuser){
  //     return response.status(200).json({
  //         data:theuser,
  //         msg:"user is created"
  //     })
  // }
};

export const updateuser = async (request: Request, response: Response) => {
  let { userId } = request.params;
  let { username, email, password, imageUrl, isAdmin } = request.body;
  let theuser: IUser | undefined | null = await UserTable.findByIdAndUpdate(
    userId,
    {
      username,
      email,
      password,
      imageUrl,
      isAdmin,
    },
    {
      new: true,
    }
  );
  if (!theuser) {
    return response.status(500).json({
      data: null,
      msg: "No user is found",
    });
  }
  return response.status(200).json(theuser);
};

export const deleteuser = async (request: Request, response: Response) => {
  let { userId } = request.params;
  let theuser: IUser | undefined | null = await UserTable.findByIdAndDelete(
    userId
  );
  if (!theuser) {
    return response.status(500).json({
      data: null,
      msg: "No user is found",
    });
  }
  return response.status(200).json(theuser);
};
