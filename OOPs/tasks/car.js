// 5. Create a base class Vehicle with:
//  - Properties: make, model, year, color
//  - Method: start() - "Vehicle is starting"
//  - Method: stop() - "Vehicle is stopping"
//  - Method: displayInfo() - shows all details

//  Create two subclasses:
//  1. Car extends Vehicle with:
//     - Additional property: numDoors
//     - Override start(): "Car engine is starting"
//     - New method: honk() - "Car is honking"
//     - New method: openTrunk() - "Trunk opened"

//  2. Motorcycle extends Vehicle with:
//     - Additional property: hasSideCar (boolean)
//     - Override displayInfo(): includes sidecar info
//     - New method: wheelie() - "Doing a wheelie!"

//  Create instances and demonstrate all methods

class Vehicle{
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    start(){
        console.log("Vehicle is starting");
    }

    stop(){
        console.log("Vehicle is starting"); 
    }

    displayInfo(){
        console.log(`Make : ${this.make}, Model : ${this.model}, Manufacture Year : ${year}, colour : ${color}`)
    }
}

class Car extends Vehicle{
    constructor(numDoors){
        super();
        this.numDoors = numDoors;
    }

    start(){
        console.log("Car engine is starting");
    }

    honk(){
        console.log("Car is honking");
    }

    openTrunk(){
        console.log("Trunk opened");
    }
}

class Motorcycle extends Vehicle{
    constructor(hasSideCar){
        super();
        this.hasSideCar = hasSideCar;
    }

    displayInfo(){
        this.displayInfo()
        this.hasSideCar = this.hasSideCar;
    }

    wheelie(){
        console.log("Doing a wheelie");
    }
}

let obj1 = new Motorcycle("BMW","M3",2014,"Black")