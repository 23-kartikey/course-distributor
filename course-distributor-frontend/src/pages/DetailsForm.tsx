import { useState } from "react";
import type { DetailsFormType } from "../types/auth";
import { fillDetails } from "../services/UserService";

const DetailsForm = () => {

    const [details, setDetails] = useState<DetailsFormType>({
        firstName: '', lastName: '', username: '', about: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target;

        setDetails(prev=>({
            ...prev, 
            [name]: value
        } as DetailsFormType))

    }

    const handleSubmit = async(e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault();

        try{
            await fillDetails(details);
            console.log("Details Filled!");
        }
        catch(error){
            console.log("Error occured: ", error);
        }

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input 
                    value={details.firstName} 
                    name="firstName" 
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <label>Last Name</label>
                <input 
                    value={details.lastName} 
                    name="lastName" 
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <label>Username</label>
                <input 
                    value={details.username} 
                    name="username" 
                    onChange={handleChange}
                    placeholder="Username"
                />
                <label>Bio</label>
                <input 
                    value={details.about} 
                    name="about" 
                    onChange={handleChange}
                    placeholder="About you... "
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );

}

export default DetailsForm;