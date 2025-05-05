"use strict";
{
    // 
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log('I am making sound!');
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBarking() {
            console.log(`I am khew khew.`);
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMew() {
            console.log(`I am Mew Mew!`);
        }
    }
    // more smarter way  ----
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBarking();
        }
        else if (isCat(animal)) {
            animal.makeMew();
        }
        else {
            animal.makeSound();
        }
    };
    // common way ---- 
    // const getAnimal = (animal: Animal) => {
    //     if(animal instanceof Dog) {
    //         animal.makeBarking()
    //     }
    //     if(animal instanceof Cat) {
    //         animal.makeMew()
    //     }
    // }
    const dog = new Dog("Neta Niyahu", "dog");
    const cat = new Cat("Norenro Mdoi", "cat");
    getAnimal(cat);
    // dog.makeBarking()
    // cat.makeMew()
    // 
}
