import { useState } from "react";
import type{ CourseForm } from "../types/course";
import { postCourse } from "../services/CourseService";
import "../styles/CourseForm.css";

const CreateCourse = () =>{
    
    const [course, setCourse] = useState<CourseForm>({
        name: '',
        shortDescription: '',
        description: ''
    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');



    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const {name, value} = e.target;

        setCourse(prev => (
            {
                ...prev,
                [name]:value
            }
        ));
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault();

        const createCourse = async() => {

            try{
                setLoading(true);
                const response = await postCourse(course);
                console.log("Course created: ", response.name);
                setCourse({
                    name: '', shortDescription: '', description: ''
                });
                alert("Course created");
            }
            catch(error){
                setError("Failed to create course");
                console.log(error);
            }
            finally{
                setLoading(false);
            }

        }

        createCourse();

    }

    return(
        <div className="create-course-page">
            <form className="course-form" onSubmit={handleSubmit}>
                <h1>Create Course</h1>
                <input 
                    type="text"
                    placeholder="Title"
                    value={course.name}
                    onChange={handleChange}
                    name="name"
                />
                <input 
                    type="text"
                    placeholder="Short Description"
                    value={course.shortDescription}
                    onChange={handleChange}
                    name="shortDescription"
                />
                <textarea 
                    placeholder="Description"
                    value={course.description}
                    onChange={(e)=>setCourse(prev=>({...prev, description: e.target.value}))}
                    name="description"
                />
                {
                    error && <p className="error">{error}</p>
                }
                <button>{loading?"Creaing...":"Create"}</button>
            </form>
        </div>
    );

}

export default CreateCourse;