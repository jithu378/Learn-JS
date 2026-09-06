class Shapes{
    display(){
        console.log("shapes....");
    }
}

class Rectangle extends Shapes{
    constructor(l,b){
        super()
        this.l = l;
        this.b = b;
    }
    area(){
        console.log(this.l * this.b);
    }
}
class Circle extends Rectangle{
    constructor(r){
        super()
        this.r = r;
    }
    area(){
        console.log(2 * 3.14 * this.r);
    }
}

let obj1 = new Circle(10,2);
obj1.area();