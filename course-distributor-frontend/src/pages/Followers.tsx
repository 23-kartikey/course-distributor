import { useEffect, useState } from "react";
import type { Follower } from "../types/user";
import ListItem from "../components/ListItem";
import { getFollowers } from "../services/UserService";
import { useParams } from "react-router-dom";


const Followers = () => {

    const { id } = useParams();
    const localId = Number(id);

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
        loadFollowers(localId);
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