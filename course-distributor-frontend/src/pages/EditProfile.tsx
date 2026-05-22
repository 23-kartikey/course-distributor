import { useEffect, useState } from "react";
import type { UserProfileType } from "../types/user";
import { getUserProfile } from "../services/UserService";
import { checkUsername } from "../services/AuthService";

const EditProfile = () => {

    const [valid, setValid]=useState(true);

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

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault();

        const editProfile = () => {
            try{
                const formData = new FormData();
                formData.append("name", profile.name);
                formData.append("username", profile.username);
                formData.append("about", profile.about);
                if(profilePhoto){
                    formData.append("profilePhoto", profilePhoto);
                }


            }
            catch(error){
                console.log("Error while saving information: ", error);
            }
        }

    }

    useEffect(()=>{
        const validateUsername = async() => {
            const response = await checkUsername(profile.username);
            setValid(response);
        }
        validateUsername();
    })

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
                    <input name="name" value={profile.name} onChange={handleChange} />

                    <label>Username</label>
                    <input name = "username" value={profile.username} onChange={handleChange} />

                    <label>About</label>
                    <input name="about" value={profile.about} onChange={handleChange} />
                </div>
                <button type="submit">Save changes</button>
            </form>
        </div>
    );

}

export default EditProfile;