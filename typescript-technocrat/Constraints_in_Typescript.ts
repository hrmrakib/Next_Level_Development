{
    const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student: T)=> {
        const course = "Next Level Web Development";

        return {
            ...student,
            course
        }
    }

   const student1 = addCourseToStudent({
        id: 1243,
        name: "Mofiz",
        email: "mofiz@gmail.com",
        devType: "Next Level"
   }) 

   const student2 = addCourseToStudent({
        id:12369, 
        name: "Mofiz",
        email: "mofiz@gmail.com",
        devType: "Next Level",
        isJobHolder: true
   })
}