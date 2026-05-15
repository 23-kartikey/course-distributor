export const getCourses = async() => {
    try{
        const response = await fetch("http://localhost:8080/course")
    
        if(!response.ok){
            throw new Error;
        }

        return response.json();
    }
    catch(Error){
        throw Error;
    }

}

type CreateCourse = {
    name: string,
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