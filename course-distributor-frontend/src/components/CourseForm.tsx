import { useState } from "react";
import type { CreateCourse } from "../types/course";
import { createCourse } from "../services/CourseService";
import "../styles/CourseForm.css";

const CourseForm = () => {

    const [course, setCourse] = useState<CreateCourse>({
        name: '', description: ''
    });

    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
       
        const { name, value } = e.target;

        setCourse(prev=>({
            ...prev,
            [name]:value
        }))

    }

    const handleSubmit = async(e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const response = await createCourse(course);
            console.log("Course created: " + response.name);
        }
        catch(error){
            console.log("Error occured while creating the course: " + error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="course-form">
            <h1 className="course-form-title">Create Course</h1>
            <label>Title: </label>
            <input name = "name" onChange={handleChange} value={course.name} />
            <label>Description: </label>
            <input name = "description" onChange={handleChange} value={course.description} />
            <button type="submit">Create</button>
        </form>
    );

}

export default CourseForm;