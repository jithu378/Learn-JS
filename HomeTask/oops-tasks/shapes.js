class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    getArea() {
        return 0;
    }

    getPerimeter() {
        return 0;
    }

    displayInfo() {
        console.log(`This is a ${this.color} ${this.name}`);
    }
}

class Rectangle extends Shape {
    constructor(name, color, width, height) {
        super(name, color);
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(name, color, radius) {
        super(name, color);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

let rectangle = new Rectangle("Rectangle", "Blue", 10, 5);

rectangle.displayInfo();
console.log("Area:", rectangle.getArea());
console.log("Perimeter:", rectangle.getPerimeter());

let circle = new Circle("Circle", "Red", 7);

circle.displayInfo();
console.log("Area:", circle.getArea());
console.log("Perimeter:", circle.getPerimeter());