import { UserUtil } from "../util/UserUtil.js";

export const getAllUsers = async (request, response) => {
    try {
        let userData = await UserUtil.getAllUserFromDB();
        return response.status(200).json(userData);
    } catch (error) {
        return response.status(500).json({ msg: "Server Error" });
    }
};

