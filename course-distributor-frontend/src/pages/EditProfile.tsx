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
                    

                </div>
            </form>
        </div>
    );

}

export default EditProfile;