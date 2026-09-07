class Shape {
    getArea() {
        throw new Error("Area method must be implemented");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

let rectangle = new Rectangle(10, 5);
let circle = new Circle(7);

console.log("Rectangle area:", rectangle.getArea());
console.log("Circle area:", circle.getArea());