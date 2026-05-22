import { useEffect, useState } from "react";
import type { UserProfileType } from "../types/user";
import { getUserProfile } from "../services/UserService";

const Profile = () => {

    const [profile, setProfile] = useState<UserProfileType>(
        {
            username: '',
            name: '',
            about: ''
        }
    );

    useEffect(() => {
        const fetchUserProfile = async() => {
            try{
                const response = await getUserProfile();
                setProfile(response);
            }
            catch(error){
                console.log("Couldn't fetch profile: ", error);
            }
        }

        fetchUserProfile();
    }, []);

    return(
        <div>
            <div>
                <div>
                    <div>
                        <img 
                            src=""
                            alt="profile"
                        />
                    </div>
                    <div>
                        <div>
                            <h2>{profile.username}</h2>
                            <button>Edit Profile</button>
                        </div>
                        <div>
                            <div>
                                <span>12</span>
                                <p>Posts</p>
                            </div>
                            <div>
                                <span>540</span>
                                <p>Followers</p>
                            </div>
                            <div>
                                <span>180</span>
                                <p>Following</p>
                            </div>
                        </div>
                        <div>
                            <h4>{profile.name}</h4>
                            <p>{profile.about}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Profile;