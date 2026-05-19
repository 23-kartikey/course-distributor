import API from "./api";
import type { Course } from "../types/course";
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

export const postCourse = async( formData: FormData ):Promise<Course> => {
    
    const response = await API.post(
        "courses/new",
        formData,
        {
            headers: {
                "Content-Type":
                    "multipart/form-data"
            }
        }
    )

    return response.data;

}