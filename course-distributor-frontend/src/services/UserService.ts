import API from "./api";
import type { EditProfileType, UserProfileType } from "../types/user";

export const getProfile = async():Promise<UserProfileType> => {

    const response = await API.get("user/profile");
    console.log("Profile fetched");
    return response.data;

}

export const getEditUserProfile = async():Promise<EditProfileType> => {

    const response = await API.get("user/profile/edit");
    console.log("Edit Profile fetched");
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

export const getUserProfile = async(id:number):Promise<UserProfileType> => {

    const response = await API.get(`/user/profile/${id}`);
    console.log("Profile fetched: "+response.data);
    return response.data;

}

export const follow = async(id: number):Promise<void> => {
    const response = await API.post(`/user/follow/${id}`);
    return response.data;
}

export const unfollow = async(id: number):Promise<void> => {
    const response = await API.post(`/user/unfollow/${id}`)
    return response.data;
}

export const getFollowers = async(id: number):Promise<