"use strict";
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal("Dronal Trump", "dog", "Khew Khew ami kutta");
const cow = new Animal("Norendro Modi", 'cow', 'Hamba ami goru');
cow.makeSound();
class Person {
    constructor(name, email, designation) {
        this.name = name;
        this.email = email;
        this.designation = designation;
    }
    whoAreYou() {
        console.log(`I am ${this.name}. I am a ${this.designation}`);
    }
}
const sakib = new Person("Sakib", "Jr. Backend Developer", "sakib@gmail.com");
sakib.whoAreYou();
