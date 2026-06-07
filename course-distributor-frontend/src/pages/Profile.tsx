import { useEffect, useState } from "react";
import type { UserProfileType } from "../types/user";
import { getProfile } from "../services/UserService";
import "../styles/Profile.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


//your own profile page
const Profile = () => {

    const { isAuthenticated } = useAuth();
    console.log("Profile:", isAuthenticated);
    const navigate = useNavigate();
    if(!isAuthenticated){
        alert(isAuthenticated);
        window.location.href=("/login");
    }

    const [profile, setProfile] = useState<UserProfileType>(
        {
            id: 0,
            username: '',
            name: '',
            about: '',
            profilePictureUrl: "https://legal-services-uae.com/wp-content/uploads/2024/09/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
            followers: 0,
            following: 0,
            courseCount: 0
        }
    );

    useEffect(() => {
        const fetchUserProfile = async() => {
            try{
                const response = await getProfile();
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
                                <span>{profile.courseCount}</span>
                                <p>Courses</p>
                            </div>
                            <div>
                                <Link className = "link" to={`/followers/${profile.id}`}><span>{profile.followers}</span></Link>
                                <p>Followers</p>
                            </div>
                            <div>
                                <Link className = "link" to={`/following/${profile.id}`}><span>{profile.following}</span></Link>
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