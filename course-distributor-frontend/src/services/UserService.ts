import API from "./api";
import type { DetailsFormType } from "../types/auth";

export const getUserProfile = async(id: number) => {

    const response = await API.get(`public/user/${id}`);
    console.log("Profile fetched");
    return response.data;

}