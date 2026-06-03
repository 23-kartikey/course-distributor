import { useState } from "react";
import type { Follower } from "../types/user";
import ListItem from "../components/ListItem";


const Followers = ({id: number}) => {

    const [followers, setFollowers] = useState<Follower[]>([]);

    return(
        <ul>
            {followers.map(follower => 
                <ListItem key = {follower.id} item = {follower} />
            )}
        </ul>
    );

}