export type Course = {
    id: number,
    name: string,
    shortDescription: string,
    thumbnailUrl?: string
};



export type CourseForm = {
    name: string,
    shortDescription: string,
    description: string,
    thumbnail: File
}