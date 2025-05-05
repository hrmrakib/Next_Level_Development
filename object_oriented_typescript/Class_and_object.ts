class Animal { 
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`)
    }
}


const dog = new Animal("Dronal Trump", "dog", "Khew Khew ami kutta");
const cow = new Animal("Norendro Modi", 'cow','Hamba ami goru'); 

cow.makeSound();



class Person {
    constructor(public name: string, public email: string,public designation: string){}

    whoAreYou() {
        console.log(`I am ${this.name}. I am a ${this.designation}`);
    }
}

const sakib = new Person("Sakib", "Jr. Backend Developer", "sakib@gmail.com");
sakib.whoAreYou()