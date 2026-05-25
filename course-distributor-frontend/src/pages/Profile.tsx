import { useEffect, useState } from "react";
import type { UserProfileType } from "../types/user";
import { getUserProfile } from "../services/UserService";
import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();

    const [profile, setProfile] = useState<UserProfileType>(
        {
            username: '',
            name: '',
            about: '',
            profilePictureUrl: "https://legal-services-uae.com/wp-content/uploads/2024/09/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
            followers: 0,
            following: 0
        }
    );

    useEffect(() => {
        const fetchUserProfile = async() => {
            try{
                const response = await getUserProfile();
                console.log(response);
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
                            src = {
                        `http://localhost:8080${profile.profilePictureUrl}`
                    }

                            alt="profile"
                        />
                    </div>
                    <div className="profile-info">
                        <div className="profile-header">
                            <h2>{profile.username}</h2>
                            <button onClick={()=>navigate("/edit-profile")}>Edit Profile</button>
                        </div>
                        <div className="profile-stats">
                            <div>
                                <span>0</span>
                                <p>Posts</p>
                            </div>
                            <div>
                                <span>{profile.followers}</span>
                                <p>Followers</p>
                            </div>
                            <div>
                                <span>{profile.following}</span>
                                <p>Following</p>
                            </div>
                        </div>
                        <div className="profile-bio">
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