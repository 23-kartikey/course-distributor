import API from "./api";
import type { Course, CreateCourse } from "../types/course";
import type { PageResponse } from "../types/types";

export const getCourses = async (page: number):Promise<PageResponse<Course>> => {

    const response = await API.get("public/courses",
        {
            params: {
                page, size: 6
            }
        }
    );
    return response.data;
}

export const createCourse = async( course : CreateCourse ):Promise<Course> => {
    
    const response = await API.post(
        "courses/new",
        course
    )

    return response.data;

}