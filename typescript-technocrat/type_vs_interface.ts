{

    // type alias use for -----> variable, array, function
    // interface ---> object

    type User1 = {
        name: string;
        age: number;
    }

    interface User2 {
        name: string,
        age: number
    }

    type UserWithID = User1 & {id: string | number}

    type UserWithRole1 = User1 & { role: string }

    interface UserWithID2 extends User2 {

    }

    type rollNumber = number;

    const a:User1 = {
        name: "Rakib",
        age: 24
    }

    const b: UserWithID = {
        name: "Simon",
        age: 20,
        id: 10014
    }

    const c: UserWithRole1={
        name: "Robin",
        age:26,
        role: "Super Visor"
    }

    // object, array --> object function

    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number
    }
    
    const rollNumbers:Roll2 = [1, 2, 3, 4, 5];

    type Add1 = (a: number, b: number) => number;

    interface Add2 {
        (a: number, b: number) : number
    }


}