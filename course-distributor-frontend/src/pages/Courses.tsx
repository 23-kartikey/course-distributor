import { useState, useEffect, type SubmitEventHandler } from "react";
import { getCourses, createCourse } from "../services/CourseService";

type Course = {
    id: number,
    name: string,
    description: string
}

const Courses = () => {

    const [courses, setCourses]=useState<Course[]>([]);
    const [course, setCourse]=useState<Course>();
    const [status, setStatus]=useState(false);

    const postCourse=(course: Course)=>{
        createCourse(course).then(()=>setStatus(true));
    }

    useEffect(()=>{
        getCourses().then(data=>setCourses(data))
    }, []);

    return(
        <List items={courses} />
    );

}

type ListProps = {
    items: Course[]
}

const List=({ items }: ListProps)=>{
    return(
        <ul>
            {
                items.map(item=>(
                    <ListItem key={item.id} item={item} />
                ))
            }
        </ul>
    )
}

type ListItemProps = {
    item: Course
}


const ListItem=({ item }: ListItemProps)=>{
    return(
        <li>
            {item.name}
        </li>
    );
}

type CourseInputProps = {
    handleSubmit: React.SubmitEvent<
}

const CourseInput=({handleSubmit}:CourseInputProps)=>{

}

export default Courses;