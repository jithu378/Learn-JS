class Car{
    constructor(name,colour,cost) {
        this.name = name;
        this.colour = colour;
        this.cost = cost;
    }
    display(){
        console.log(`Name : ${this.name}`);
        console.log(`Colour : ${this.colour}`);
        console.log(`Price : ${this.cost}`);
    }
}

let obj1 = new Car("Benz","White",4500000);
let obj2 = new Car("BMW","Purple",5500000);

obj2.display();
obj1.display();