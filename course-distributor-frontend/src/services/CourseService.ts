import API from "./api";
import type { Course, CreateCourse } from "../types/course";

export const getCourses = async ():Promise<Course[]> => {
    const response = await API.get("/course");
    return response.data;
}

export const createCourse = async( course : CreateCourse ):Promise<Course> => {
    
    const response = await API.post(
        "/course",
        course
    )

    return response.data;

}