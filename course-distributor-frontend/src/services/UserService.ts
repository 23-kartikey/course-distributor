import API from "./api";
import type { DetailsFormType } from "../types/auth";

export const fillDetails = async(details: DetailsFormType) =>{
    console.log("In here fillDetails function");
    const response = await API.put(`public/user/details/${localStorage.getItem("id")}`, details);

    return response.data;

}