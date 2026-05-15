import { useState, useEffect } from "react";
import type { CreateCourse } from "../types/course";
import { createCourse } from "../services/CourseService";

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
            console.log(response);
        }
        catch(error){
            console.log("Error occured while creating the course: " + error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Course</h1><br />
            <label>Title: </label>
            <input name = "name" onChange={handleChange} value={course.name} /><br />
            <label>Description: </label>
            <input name = "description" onChange={handleChange} value={course.description} /><br />
            <button type="submit">Create</button>
        </form>
    );

}

export default CourseForm;