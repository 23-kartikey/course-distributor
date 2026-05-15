import API from "./api";

export const getCourses = async () => {
    const response = await API.get("/course");
    return response;
}

type CreateCourse = {
    id: number,
    title: string,
    description: string
}

export const createCourse = async( course : CreateCourse ) => {
    try{
        const response = await fetch("http://localhost:8080/course",
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(course)
            }
        )
        
        if(!response.ok){
            throw new Error;
        }

        const data = await response.json();

        console.log(data);
    }

    catch(Error){
        throw Error;
    }
}