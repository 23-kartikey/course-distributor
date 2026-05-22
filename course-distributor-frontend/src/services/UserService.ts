import API from "./api";
import type { UserProfileType } from "../types/user";

export const getUserProfile = async():Promise<UserProfileType> => {

    const response = await API.get("user/profile");
    console.log("Profile fetched");
    return response.data;

}

export const editUserProfile = async(formData:FormData):Promise<UserProfileType> => {

    const response = await API.put(
        "user/edit",
        formData,
        {
            headers:{
                "Content-Type":"mutlipart/form-data"
            }
        }
    );

    return response.data;

}
