import "../styles/Courses.css";

import type { Course } from "../types/course";

type CourseCardProps = {
    course: Course    
}

const CourseCard = ({course}:CourseCardProps) => {
    return(
        <div className = "course-card">
            <div className="course-banner">

                <img
                    src={
                        `http://localhost:8080${course.thumbnailUrl}`
                    }

                    alt={course.name}

                    className="banner-image"
                    
                />
                <div className="banner-overlay" />

                <h2>{course.name}</h2>
            </div>
            <div className = "course-content">
                <p>{course.shortDescription}</p>
                <p><a  className="author" href="/">Author</a></p>
            </div>
        </div>
    )
}

export default CourseCard;