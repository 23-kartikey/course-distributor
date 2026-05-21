import API from "./api";
import type { UserProfileType } from "../types/user";

export const getUserProfile = async(id: number):Promise<UserProfileType> => {

    const response = await API.get(`public/user/${id}`);
    console.log("Profile fetched");
    return response.data;

}