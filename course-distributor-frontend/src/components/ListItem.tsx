import type { Follower } from "../types/user";

type ListItemProps = {
    item: Follower;
}

const ListItem = ({item}: ListItemProps) => {
    return(
        <li>
            <span>{item.name}</span>
        </li>
    );
}

export default ListItem;