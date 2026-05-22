import { useEffect, useState } from "react";
import type { UserProfileType } from "../types/user";
import { getUserProfile } from "../services/UserService";

const EditProfile = () => {

    const [profile, setProfile] = useState<UserProfileType>(
        {
            name: "",
            username: "",
            about: ""
        }
    );

    const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target;

        setProfile(prev=>(
            {
                ...prev, [name]:value
            }
        ))

    }



    useEffect(()=>{

        const fetchInfo = async() => {
            try{
                const response = await getUserProfile();
                setProfile(response);
            }
            catch(error){
                console.log("Error while loading profile info: ", error);
            }

        }

        fetchInfo();

    }, []);

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <img />
                     <input 
                        id="fileinput"
                        type="file"
                        accept="image/*"
                        onChange={(e)=>{
                            if(e.target.files){
                                setProfilePhoto(e.target.files[0]);
                            }
                        }}
                     />
                </div>
                <div>
                    <label>Name</label>
                    <input value={profile.name} onChange={handleChange} />

                    <label>Username</label>
                    <input value={profile.username} onChange={checkUsername} />

                    <label>About</label>
                    <input value={profile.about} onChange={handleChange} />
                </div>
                <button type="submit">Save changes</button>
            </form>
        </div>
    );

}

export default EditProfile;