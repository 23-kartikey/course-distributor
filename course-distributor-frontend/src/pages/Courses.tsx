import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";
import "../styles/Courses.css";

const Courses = () =>{
    

    return(
        <div className="courses-page">
            <CourseList />
            <CourseForm />
        </div>
    );

}

export default Courses;