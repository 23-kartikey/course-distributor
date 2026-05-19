import { useState } from "react";
import type { LoginForm } from "../types/auth";
import { login } from "../services/AuthService";
import "../styles/Auth.css";

const Login = () => {

    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);
    const [loginForm, setLoginForm] = useState<LoginForm>({ usernameOrEmail:'', password:''});

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
            await login(loginForm);
            console.log("Successful Login!");
            setSuccess(true);
            window.location.href = "/";
        }
        catch(error){
            setFail(true);
            console.log("Login error: ", error);
        }

    }

    return(
        <div className="auth-page">
            <form className="auth-form" onSubmit = {handleSubmit}>
                <h1 className="auth-title">Login</h1>
                <div className="auth-group">
                <label>Email/Username</label>
                <input type="text" value={loginForm.usernameOrEmail} onChange={handleChange} name="usernameOrEmail" />
                <label>Password</label>
                <input type="password" value={loginForm.password} onChange={handleChange} name="password" />
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