import { useState, useEffect } from "react";
import type {Course} from "../types/course";
import CourseCard from "../components/CourseCard";
import { getCourses } from "../services/CourseService";
import "../styles/Courses.css";

const Courses = () =>{
    
    const [courses, setCourses] = useState<Course[]>([{
            id:1,
            name: "",
            shortDescription: "",
            authorId: 0
        },
        {
            id:2,
            name: "",
            shortDescription: "",
            authorId: 0
        },
        {
        id:3,
        name: "Flunk",
        shortDescription: "",
        authorId: 0
    },
    {
            id:4,
            name: "",
            shortDescription: "",
            authorId: 0
        },
        {
            id:5,
            name: "",
            shortDescription: "",
            authorId: 0
        },
        {
        id:6,
        name: "",
        shortDescription: "",
        authorId: 0
    }

    ])
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {

        const fetchCourses= async() => {
            try{
                const response = await getCourses(page);
                setCourses(response.content);
                setTotalPages(response.totalPages);
            }
            catch(error){
                console.log("Unable to fetch courses", error);
            }
        }

        fetchCourses();


    }, [page])

    return(
        <div className="courses-page">
            <div className = "course-grid">
                {
                    courses.map(course => (

                        <CourseCard key={course.id} course={course} />

                    ))
                }
            </div>

            <div className = "pagination">

                <button
                    disabled={page === 0}
                    onClick={()=>
                        setPage(page-1)
                    }
                >
                    Prev
                </button>

                <span>Page {page + 1}</span> 

                <button
                    disabled={
                        page === totalPages - 1
                    }

                    onClick = {()=>
                        setPage(page+1)
                    }
                >
                    Next
                </button>

            </div>
        </div>
    );

}

export default Courses;