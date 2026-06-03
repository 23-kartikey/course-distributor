import type { Follower } from "../types/user";

const ListItem = ({item}: ) => {
    return(
        <li>
            <span>{item.name}</span>
        </li>
    );
}

export default ListItem;