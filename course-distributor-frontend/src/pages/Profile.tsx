import { useEffect, useState } from "react";
import type { UserProfileType } from "../types/user";
import { getUserProfile } from "../services/UserService";
import "../styles/Profile.css";

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
        <div className="profile-page">
            <div className="profile-container">
                <div className="profile-top">
                    <div className="profile-image">
                        <img 
                            src=""
                            alt="profile"
                        />
                    </div>
                    <div className="profile-info">
                        <div className="profile-header">
                            <h2>{profile.username}</h2>
                            <button>Edit Profile</button>
                        </div>
                        <div className="profile-stats">
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
                        <div className="profile-bio">
                            <h4>Kartikey Chauhan{/*profile.name*/}</h4>
                            <p>{/*profile.about*/}This is an about created for test</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Profile;