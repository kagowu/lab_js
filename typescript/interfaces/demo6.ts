class Animal {
    name: string;
    constructor(theName?: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");

    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

class Shake extends Animal {
    constructor(name: string) { super(name) };
    move(distanceInMeters = 5) {
        console.log("Silthering...");
        super.move(distanceInMeters);
    }
}

class House extends Animal {

    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Shake("Sammy the Python");
let tom = new House("Tommy the Paiomino");
sam.move();
tom.move(34);


