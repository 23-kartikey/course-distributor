import API from "./api";
import type { EditProfileType, UserProfileType } from "../types/user";

export const getUserProfile = async():Promise<UserProfileType> => {

    const response = await API.get("user/profile");
    console.log("Profile fetched");
    return response.data;

}

export const getEditUserProfile = async():Promise<EditProfileType> => {

    const response = await API.get("user/profile/edit");
    console.log("Profile fetched");
    return response.data;

}

export const editUserProfile = async(formData:FormData):Promise<EditProfileType> => {

    const response = await API.put(
        "user/edit",
        formData,
        {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
    );

    return response.data;

}
