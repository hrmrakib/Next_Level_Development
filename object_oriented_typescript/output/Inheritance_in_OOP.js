"use strict";
{
    //
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        work(task) {
            console.log(`${this.name} is ${task}`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
        coaching() {
            console.log(`${this.name} is doing regular coaching for good result.`);
        }
    }
    class Programmer extends Person {
        constructor(name, age, address, domain) {
            super(name, age, address);
            this.domain = domain;
        }
        problemSolving() {
            console.log(`${this.name} is doing problem-solving regularly.`);
        }
    }
    //
}
