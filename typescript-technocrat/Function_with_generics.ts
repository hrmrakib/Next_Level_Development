{
    const createArray = (param: string): string[] => {
        return [param];
    }

    const createArrayWithGenerics = <T>(param: T): T[] => {
        return [param];
    }

    const res1 = createArray("TypeScript");

    const resGenerics = createArrayWithGenerics<string>("Bangladesh");

    type User = {
        id: number;
        name: string;
    }

    const resGenericsObj = createArrayWithGenerics({
        id: 1012,
        name: "Mr. Bean" 
    })


    // tuple

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    }

    const res2 = createArrayWithTuple<string, number>("TypeScript", 2025);

    const resGenerics2 = createArrayWithTuple<string, string>("Dhaka" ,"Bangladesh");

    type User2 = {
        id: number;
        name: string;
    }

    const resGenericsObj2 = createArrayWithTuple<User, number[]>({
        id: 1012,
        name: "Mr. Bean" 
    }, [1, 2, 3, 4, 5])

    


    // another example
    const addCourseToStudent = <T>(student: T)=> {
        const course = "Next Level Web Development";

        return {
            ...student,
            course
        }
    }

   const student1 = addCourseToStudent({
        name: "Mofiz",
        email: "mofiz@gmail.com",
        devType: "Next Level"
   }) 

   const student2 = addCourseToStudent({
        name: "Mofiz",
        email: "mofiz@gmail.com",
        devType: "Next Level",
        isJobHolder: true
   })
    
}