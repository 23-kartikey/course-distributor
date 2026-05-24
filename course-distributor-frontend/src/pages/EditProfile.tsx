import { useEffect, useState } from "react";
import type { EditProfileType, UserProfileType } from "../types/user";
import { editUserProfile, getEditUserProfile, getUserProfile } from "../services/UserService";
import { checkUsername } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {

    const navigate = useNavigate();

    const [valid, setValid]=useState(true);

    const [profile, setProfile] = useState<EditProfileType>(
        {
            firstName: '',
            lastName: '',
            username: '',
            about: ''        }
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
                formData.append("firstName", profile.firstName);
                formData.append("lastName", profile.lastName);
                formData.append("username", profile.username);
                formData.append("about", profile.about);
                if(profilePhoto){
                    formData.append("profilePicture", profilePhoto);
                }

                const response = await editUserProfile(formData);
                console.log("Editted successfully: ", response);
                navigate("/profile-user");


            }
            catch(error){
                console.log("Error while saving information: ", error);
            }
        }

        editProfile();

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
                const response = await getEditUserProfile();
                console.log(response);
                setProfile(prev=>({
                    ...prev,
                    ...(response.firstName!=null && {firstName: response.firstName}),
                    ...(response.lastName!=null && {lastName: response.lastName}),
                    ...(response.username!=null && {username:response.username}),
                    ...(response.about!=null && {about: response.about})                    
                }),
            )
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
                    <label>First Name</label>
                    <input name="firstName" value={profile.firstName} onChange={handleChange} />
                    <label>Last Name</label>
                    <input name="lastName" value={profile.lastName} onChange={handleChange} />

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