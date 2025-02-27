import { Response, Request } from "express";
import GroupsTable from "../database/GroupSchema";
import { IGroup } from "../models/IGroup";
import mongoose from "mongoose";

// @usage : to get all group
// @method : GET
// @params : no-params
export const getAllgroups = async (request: Request, response: Response) => {
  try {
    let group: IGroup[] | undefined = await GroupsTable.find();
    if (group) {
      return response.status(200).json(group);
    }
  } catch (err: any) {
    return response.status(500).json({
      msg: "Data not Found",
    });
  }
};
// get group id
export const getgroup = async (request: Request, response: Response) => {
  let { groupId } = request.params;
  const mongogroupId = new mongoose.Types.ObjectId(groupId);
  let thegroup: IGroup | undefined | null = await GroupsTable.findById(
    mongogroupId
  );
  if (!thegroup) {
    return response.status(500).json({
      data: null,
      error: "No Group is found",
    });
  }
  return response.status(200).json(thegroup);
};

//post
export const creategroup = async (request: Request, response: Response) => {
  let { name: name } = request.body;
  let thegroup: IGroup | null | undefined = await new GroupsTable({
    name: name,
  }).save();
  if (thegroup) {
    return response.status(200).json({
      data: thegroup,
      msg: "group is created",
    });
  }
};

//update
export const updategroup = async (request: Request, response: Response) => {
  let { groupId } = request.params;
  let { name } = request.body;
  // const mongogroupId = new mongoose.Types.ObjectId(groupId);
  let thegroup: IGroup | undefined | null = await GroupsTable.findByIdAndUpdate(
    groupId,
    {
      name,
    },
    {
      new: true,
    }
  );
  if (!thegroup) {
    return response.status(500).json({
      data: null,
      error: "No Group is found",
    });
  }
  return response.status(200).json(thegroup);
};

//delete
export const deletegroup = async (request: Request, response: Response) => {
  let { groupId } = request.params;
  // const mongogroupId = new mongoose.Types.ObjectId(groupId);
  let thegroup: IGroup | undefined | null = await GroupsTable.findByIdAndDelete(
    groupId
  );
  if (!thegroup) {
    return response.status(500).json({
      data: null,
      error: "No Group is found",
    });
  }
  return response.status(200).json(thegroup);
};
