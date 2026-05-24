import { useEffect, useState } from "react";
import type { UserProfileType } from "../types/user";
import { editUserProfile, getUserProfile } from "../services/UserService";
import { checkUsername } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {

    const navigate = useNavigate();

    const [valid, setValid]=useState(true);

    const [profile, setProfile] = useState<UserProfileType>(
        {
            name: "",
            username: "",
            about: "",
            profilePictureUrl: ""
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

        const editProfile = async() => {
            try{
                const formData = new FormData();
                formData.append("name", profile.name);
                formData.append("username", profile.username);
                formData.append("about", profile.about);
                if(profilePhoto){
                    formData.append("profilePhoto", profilePhoto);
                }

                const response = await editUserProfile(formData);

                setProfile(response);

                navigate("/profile-user");


            }
            catch(error){
                console.log("Error while saving information: ", error);
            }
        }

    }

    useEffect(()=>{
        const validateUsername = async() => {
            try{
                if(profile.username === localStorage.getItem("username")){
                    setValid(true);
                }
                else{
                    const response = await checkUsername(profile.username);
                    setValid(response);
                }
            }
            catch(error){
                console.log("Unable to validate username", error);
            }
        }
        validateUsername();
    }, [profile.username]);

    useEffect(()=>{

        const fetchInfo = async() => {
            try{
                const response = await getUserProfile();
                setProfile(response);
                localStorage.setItem("username", response.username);
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
                <button disabled={!valid} type="submit">Save changes</button>
            </form>
        </div>
    );

}

export default EditProfile;