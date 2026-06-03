export type UserProfileType = {
    id: number;
    name : string;
    username: string;
    about: string;
    followers: number;
    following: number;
    courseCount: number;
    isFollowedBy?: boolean;
    profilePictureUrl?: string
}

export type EditProfileType = {
    firstName: string;
    lastName: string;
    username: string;
    about: string;
}


export type Follower = {
    id: number;
    name: string;
}