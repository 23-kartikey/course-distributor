import { useState } from "react"
import type { UserProfileType } from "../types/user"

const EditProfile = () => {

    const [profile, setProfile] = useState<UserProfileType>(
        {
            name: "",
            username: "",
            about: ""
        }
    );

    const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

    return(
        <div>
            <form>
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
                <button onClick={handleSubmit}>Save changes</button>
            </form>
        </div>
    );

}

export default EditProfile;