import type { RegisterForm, LoginForm } from "../types/auth";
import API from "./api";

export const register = async(credentials:RegisterForm) => {

    const response = await API.post("/auth/register", credentials);
    localStorage.setItem("token", response.data.token);
    return response.data;

}

export const login = async(credentials: LoginForm) => {
    const response = await API.post("/auth/login", credentials);
    localStorage.setItem("token", response.data.token);
    return response.data;
}

export const logout = () => {
    localStorage.removeItem("token");
    console.log("Logged out");
}

export const getToken = () => {
    return localStorage.getItem("token");
}

export const isLoggedIn = () => {
    return !!getToken();
}