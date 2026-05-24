import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
    isAuthenticated: boolean,
    login: (token: string, username: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }:{ children: React.ReactNode }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem("token");

        setIsAuthenticated(!!token);
    }, []);

    const login = (token : string, username: string) => {
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        setIsAuthenticated(true);
    }

    const logout = () => {
        // localStorage.removeItem("token");
        // localStorage.removeItem("username");
        localStorage.clear();
        setIsAuthenticated(false);
    }

    return(
        <AuthContext.Provider value = {{isAuthenticated, login, logout}}>
        {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return  context;
}

export default AuthContext;