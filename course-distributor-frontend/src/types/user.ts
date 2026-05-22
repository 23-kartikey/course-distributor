export type UserProfileType = {
    name : string;
    username: string;
    about: string;
    profilePictureUrl?: string
}

export type EditProfileType = {
    name: string;
    username: string;
    about: string;
    profilePicture?: File;
}
