// parameter type, default, optional, and return type

function sum (a: number, b: number, c:number = 0, d?:number): number {
    return a +b;
}

const add1 = sum(29, 47);
console.log(add1)

// rest
function sumAll (...numbers: number[]) {
    return numbers.reduce((acc, num)=> acc + num, 0);
}

const values = [10,20, 33, 49, 41, 78, 96]
const x = sumAll(...values)
console.log(x)
