import { useState } from "react";
import type { RegisterForm } from "../types/auth";
import { register } from "../services/AuthService";
import "../styles/Auth.css";

const Register = () => {

    const [registerForm, setRegisterForm] = useState<RegisterForm>({ email:'', username:'', password:'', name: '', });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target;

        setRegisterForm(prev => ({
            ...prev,
            [name]:value
        }));

    }

    const handleSubmit= async(e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault();

        try{
            const response = await register(registerForm);
            console.log("Registration Successful! - ", response);
        }
        catch(error){
            console.log("Registration failed: ", error);
        }

    }

    return(
        <div className="auth-page">
            <form className="auth-form" onSubmit = {handleSubmit}>
                <h1 className="auth-title">Register</h1>
                <div className="auth-group">
                <label>Email</label>
                <input type="text" value={registerForm.email} onChange={handleChange} name="email" />
                <label>Password</label>
                <input type="password" value={registerForm.password} onChange={handleChange} name="password" />
                <label>Name</label>
                <input type="text" value={registerForm.name} onChange={handleChange} name="name" />
                <label>Username</label>
                <input type="text" value={registerForm.username} onChange={handleChange} name="username" />
                <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;