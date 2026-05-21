import type { RegisterForm, LoginForm } from "../types/auth";
import API from "./api";

export const register = async(credentials:RegisterForm) => {
    const response = await API.post("/auth/register", credentials);
    return response.data;

}

export const loginUser = async(credentials: LoginForm) => {
    const response = await API.post("/auth/login", credentials);
    return response.data;
}


export const getToken = () => {
    return localStorage.getItem("token");
}

export const checkUsername = async(username:string):Promise<boolean> => {
    const response = await API.get(`auth/check?username=${username}`);
    return response.data;
}