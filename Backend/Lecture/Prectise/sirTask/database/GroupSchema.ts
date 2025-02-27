import { IGroup } from "../models/IGroup";
import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema<IGroup>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imageUrl: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const GroupsTable = mongoose.model<IGroup>("group", GroupSchema);
export default GroupsTable;
