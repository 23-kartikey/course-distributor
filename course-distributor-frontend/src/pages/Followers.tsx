import { useEffect, useState } from "react";
import type { Follower } from "../types/user";
import ListItem from "../components/ListItem";
import { getFollowers } from "../services/UserService";


const Followers = (id: number) => {

    const [followers, setFollowers] = useState<Follower[]>([]);

    useEffect(()=>{
        const loadFollowers = async(id: number) => {
            try{
                const response = await getFollowers(id);
                setFollowers(response);
                console.log("Followers fetched");
            }
            catch(error){
                console.log("Couldn't fetch followers: ", error);
            }
        }
        loadFollowers(id);
    }, []);

    return(
        <ul>
            {followers.map(follower => 
                <ListItem key = {follower.id} item = {follower} />
            )}
        </ul>
    );

}

export default Followers;