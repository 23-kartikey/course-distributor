import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { RegisterForm } from "../types/auth";
import { useAuth } from "../contexts/AuthContext";
import { register, checkUsername } from "../services/AuthService";
import "../styles/Auth.css";

const Register = () => {

    const { isAuthenticated, login } = useAuth();

    const navigate = useNavigate();

    if(isAuthenticated) navigate("/");

    const [registerForm, setRegisterForm] = useState<RegisterForm>({ email:'', password:'', username: ''});
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);
    const [valid, setValid] = useState(false);
    const [show, setShow] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target;

        setRegisterForm(prev => ({
            ...prev,
            [name]:value
        }));

    }

    useEffect(()=>{
        const validateUsername = async() => {
            console.log("Validating username");
            const response = await checkUsername(registerForm.username);
            setValid(response);
        }
        if(registerForm.username.length>0){
            setShow(true);
            validateUsername();
        }
        if(registerForm.username.length==0) setValid(false);
    }, [registerForm.username]);


    const handleSubmit= async(e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault();

        try{
            const response = await register(registerForm);
            setSuccess(true);
            login(response.token);
            console.log("Registration Successfull!");
            navigate("/");
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
                <input className = "input" type="text" value={registerForm.email} onChange={handleChange} name="email" />
                <label>Password</label>
                <input className = "input" type="password" value={registerForm.password} onChange={handleChange} name="password" />
                <label>Username</label>
                {show?(valid?
                    (<input className="valid-username" type="text" value={registerForm.username} onChange={handleChange} name="username" />)
                    :(<input className="invalid-username" type="text" value={registerForm.username} onChange={handleChange} name="username" />)
                ):(<input className="input" type="text" value={registerForm.username} onChange={handleChange} name="username" />)
                }  
                {show && (valid ?  <p className="valid-message">Username valid✅</p> 
                        : <p className="invalid-message">Invalid Username❌</p>)}
                <button disabled={!valid} type="submit">Register</button>
                </div>
                <p>Already a user? Click <a href="/login">here</a> to login</p>
                {fail && <p style={{"color" : "red"}}>Unable to register</p>}
                {success && <p style={{"color": "green"}}>Registered Successfully!</p>}
            </form>
        </div>
    )
}

export default Register;