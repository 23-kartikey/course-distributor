import "../styles/Courses.css";

import type { Course } from "../types/course";

type CourseCardProps = {
    course: Course    
}

const CourseCard = ({course}:CourseCardProps) => {
    return(
        <a className = "course-card">
            <div className="course-banner">
                <h2>{course.name}</h2>
            </div>
            <div className = "course-content">
                <p>{course.shortDescription}</p>
            </div>
        </a>
    )
}

export default CourseCard;