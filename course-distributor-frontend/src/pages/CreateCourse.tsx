import { useState } from "react";
import type{ CourseForm } from "../types/course";
import { postCourse } from "../services/CourseService";
import "../styles/CourseForm.css";

type CreateCourseForm = {
    name: string,
    shortDescription: string,
    description: string
}

const CreateCourse = () =>{

    const [thumbnail, setThumbnail] = useState<File | null>(null);
    
    const [course, setCourse] = useState<CreateCourseForm>({
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
                
                const formData = new FormData();

                formData.append("name", course.name);
                
                formData.append("shortDescription", course.shortDescription);
                
                formData.append("description", course.description);
                
                if(thumbnail){
                    formData.append("thumbnail", thumbnail);
                }

                const response = await postCourse(formData);
                
                console.log("Course created: ", response.name);

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
                <input 
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        if(e.target.files){
                            setThumbnail(e.target.files[0]);
                        }
                    }}
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