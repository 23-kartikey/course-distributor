import { useState } from "react";
import type { RegisterForm } from "../types/auth";

const Register = () => {

    const [registerForm, setRegisterForm] = useState<RegisterForm>({ email:'', password:''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target;

        setRegisterForm(prev => ({
            ...prev,
            [name]:value
        }));

    }

    const handleSubmit= (e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault();

        try{

        }
        catch{

        }

    }

    return(
        <div>
            <h1>Register</h1>
            <form onSubmit = {handleSubmit}>
                <label>Email</label>
                <input type="text" value={registerForm.email} onChange={handleChange} name="email" />
                <label>Password</label>
                <input type="password" value={registerForm.password} onChange={handleChange} name="password" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;