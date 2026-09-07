class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    start() {
        console.log("Vehicle is starting");
    }

    stop() {
        console.log("Vehicle is stopping");
    }

    displayInfo() {
        console.log(
            `${this.make} ${this.model}, ${this.year}, ${this.color}`
        );
    }
}

class Car extends Vehicle {
    constructor(make, model, year, color, numDoors) {
        super(make, model, year, color);
        this.numDoors = numDoors;
    }

    start() {
        console.log("Car engine is starting");
    }

    honk() {
        console.log("Car is honking");
    }

    openTrunk() {
        console.log("Trunk opened");
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, color, hasSideCar) {
        super(make, model, year, color);
        this.hasSideCar = hasSideCar;
    }

    displayInfo() {
        console.log(
            `${this.make} ${this.model}, ${this.year}, ${this.color}, Sidecar: ${this.hasSideCar}`
        );
    }

    wheelie() {
        console.log("Doing a wheelie!");
    }
}

let car = new Car("Toyota", "Camry", 2024, "Black", 4);

car.displayInfo();
car.start();
car.honk();
car.openTrunk();
car.stop();

let motorcycle = new Motorcycle(
    "Honda",
    "CBR",
    2023,
    "Red",
    false
);

motorcycle.displayInfo();
motorcycle.start();
motorcycle.wheelie();
motorcycle.stop();