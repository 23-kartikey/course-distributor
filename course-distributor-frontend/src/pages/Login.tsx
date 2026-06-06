import { useState } from "react";
import type { LoginForm } from "../types/auth";
import { loginUser } from "../services/AuthService";
import "../styles/Auth.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const {isAuthenticated, login} = useAuth();
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loginForm, setLoginForm] = useState<LoginForm>({ usernameOrEmail:'', password:''});
    const navigate = useNavigate();

    if(isAuthenticated){
        navigate("/");
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target;

        setLoginForm(prev => ({
            ...prev,
            [name]:value
        }));

    }

    const handleSubmit= async(e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault();

        try{
            const response = await loginUser(loginForm);
            login(response.token, response.username);
            console.log("Successful Login!");
            setSuccess(true);
            window.location.href = "/";
        }
        catch(error){
            setFail(true);
            if(axios.isAxiosError(error) && error.response){
                setErrors(error.response.data);
            }
            console.log("Login error: ", error);
        }

    }

    return(
        <div className="auth-page">
            <form className="auth-form" onSubmit = {handleSubmit}>
                <h1 className="auth-title">Login</h1>
                <div className="auth-group">
                <label>Email/Username</label>
                <input className="input" type="text" value={loginForm.usernameOrEmail} onChange={handleChange} name="usernameOrEmail" />
                {errors.usernameOrEmail && (
                    <p style = {{color:"red"}}>{errors.usernameOrEmail}</p>
                )}
                <label>Password</label>
                <input className="input" type="password" value={loginForm.password} onChange={handleChange} name="password" />
                {errors.password && (
                    <p style = {{color:"red"}}>{errors.password}</p>
                )}
                <button type="submit">Login</button>
                </div>
                <p>New here? Click <a href="/register">here</a> to register</p>
                {fail && <p style={{"color" : "red"}}>Unable to login</p>}
                {success && <p style={{"color": "green"}}>Registered Successfully!</p>}
            </form>
        </div>
    )
}

export default Login;