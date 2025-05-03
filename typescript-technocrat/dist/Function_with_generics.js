"use strict";
{
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGenerics = (param) => {
        return [param];
    };
    const res1 = createArray("TypeScript");
    const resGenerics = createArrayWithGenerics("Bangladesh");
    const resGenericsObj = createArrayWithGenerics({
        id: 1012,
        name: "Mr. Bean"
    });
    // tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res2 = createArrayWithTuple("TypeScript", 2025);
    const resGenerics2 = createArrayWithTuple("Dhaka", "Bangladesh");
    const resGenericsObj2 = createArrayWithTuple({
        id: 1012,
        name: "Mr. Bean"
    }, [1, 2, 3, 4, 5]);
    // another example
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        name: "Mofiz",
        email: "mofiz@gmail.com",
        devType: "Next Level"
    });
    const student2 = addCourseToStudent({
        name: "Mofiz",
        email: "mofiz@gmail.com",
        devType: "Next Level",
        isJobHolder: true
    });
}
