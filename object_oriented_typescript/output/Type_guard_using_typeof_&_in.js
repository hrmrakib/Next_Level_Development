"use strict";
{
    const add = (a, b) => {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        else {
            return a.toString() + b.toString();
        }
    };
    const n1 = add(20, 30);
    const n2 = add('20', 5);
    console.log(n1, n2);
    const getUser = (user) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name}`);
        }
    };
    const user1 = {
        name: "Abul",
    };
    const user2 = {
        name: "Babul",
        role: "admin"
    };
    // 
}
