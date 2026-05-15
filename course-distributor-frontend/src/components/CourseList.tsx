import { useState, useEffect } from "react";
import type { Course } from "../types/course"; 
import { getCourses } from "../services/CourseService";
import "../styles/Courses.css";

const CourseList = () => {
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
    }, []);

    return(
        <div className="course-sub">
            <h1 className="course-title">Courses</h1>
            {courses.map(course=>(
                <ul className="course-list" key={course.id}>
                    <li>
                        <p><strong>{course.name}</strong>  {course.description}</p>
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default CourseList;