import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { UserProfileType } from "../types/user";
import { getProfile, getUserProfile } from "../services/UserService";

const UserProfile = () => {

    const { id } = useParams();
    const userId = Number(id);
    const navigate = useNavigate();

    const [profile, setProfile] = useState<UserProfileType>(
        {
            username: '',
            name: '',
            about: '',
            profilePictureUrl: "https://legal-services-uae.com/wp-content/uploads/2024/09/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
        }
    );

    const handleFollow = async() => {
        try{
            const response = await handleFollow()
    }

    useEffect(() => {
        const fetchUserProfile = async() => {
            try{
                const response = await getProfile(userId);
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
                            <button onClick={handleFollow}>Follow</button>
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
                            <h4>{profile.name}</h4>
                            <p>{profile.about}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;