import { useState, useEffect } from "react";
import type {Course} from "../types/course";
import CourseCard from "../components/CourseCard";
import "../styles/Courses.css";

const Courses = () =>{
    
    const [courses, setCourses] = useState<Course[]>([{
            id:1,
            name: "Spring",
            shortDescription: "This is a test description to help study"
        },
        {
            id:2,
            name: "Python",
            shortDescription: "This is a test description to help study"
        },
        {
        id:3,
        name: "Flunk",
        shortDescription: "How to have fun?"
    },
    {
            id:4,
            name: "Spring",
            shortDescription: "This is a test description to help study"
        },
        {
            id:5,
            name: "Python",
            shortDescription: "This is a test description to help study"
        },
        {
        id:6,
        name: "Flunk",
        shortDescription: "How to have fun?"
    }

    ])
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    return(
        <div className="courses-page">
            <h1>Courses</h1>
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