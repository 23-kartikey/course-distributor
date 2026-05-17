import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { RegisterForm } from "../types/auth";
import { register } from "../services/AuthService";
import "../styles/Auth.css";

const Register = () => {

    const navigate = useNavigate();
    const [registerForm, setRegisterForm] = useState<RegisterForm>({ email:'', password:''});
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);

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
            await register(registerForm);
            setSuccess(true);
            navigate("/register-details");
        }
        catch(error){
            setFail(true);
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
                <button type="submit">Register</button>
                </div>
                {fail && <p style={{"color" : "red"}}>Unable to register</p>}
                {success && <p style={{"color": "green"}}>Registered Successfully!</p>}
            </form>
        </div>
    )
}

export default Register;