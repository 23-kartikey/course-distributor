import { useEffect, useState } from "react";
import type { UserProfileType } from "../types/user";
import { getUserProfile } from "../services/UserService";

const Profile = () => {

    const [profile, setProfile] = useState<UserProfileType | null>(null);

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
    }, []);

    return(
        <div>
            <div></div>
            <div>

            </div>
        </div>
    );

}