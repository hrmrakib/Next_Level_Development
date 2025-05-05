{
  //

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    work(task: string) {
      console.log(`${this.name} is ${task}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }

    coaching() {
      console.log(`${this.name} is doing regular coaching for good result.`);
    }
  }

  class Programmer extends Person{
    constructor(name: string, age: number, address: string, domain: string) {
        super(name, age, address);
    }

    problemSolving() {
        console.log(`${this.name} is doing problem-solving regularly.`);
    }
  }

  //
}
