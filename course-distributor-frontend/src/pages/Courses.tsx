import { useState, useEffect, type SubmitEventHandler } from "react";
import { getCourses, createCourse } from "../services/CourseService";
import type { Course } from "../types/course";

const Courses = () =>{
    
    const [courses, setCourses]= useState<Course[]>([]);

    useEffect(()=>{
        const fetchCourses = async() => {
            const data = await getCourses();
            setCourses(data);
        }
        fetchCourses();
    })

    return(
        <div>
            {courses.map(course=>(
                <ul>
                    <li key={course.id}>
                        {course.name}
                    </li>
                </ul>
            ))}
        </div>
    );

}

export default Courses;