import { useState, useEffect, type SubmitEventHandler } from "react";
import { getCourses, createCourse } from "../services/CourseService";
import type { Course } from "../types/course";
import CourseForm from "../components/CourseForm";

const Courses = () =>{
    
    const [courses, setCourses]= useState<Course[]>([]);

    useEffect(()=>{
        
        const loadCourses = async() => {
            try{
                const data = await getCourses();
                setCourses(data);
            }
            catch(error){
                console.log("Unable to fetch courses: " + error);
            }
        };

        loadCourses();
    }, [])

    return(
        <div>
            {courses.map(course=>(
                <ul key={course.id}>
                    <li>
                        <p><strong>{course.name}</strong>  {course.description}</p>
                    </li>
                </ul>
            ))}
            <CourseForm />
        </div>
    );

}

export default Courses;