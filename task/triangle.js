// triangle

let a = 20;
let b = 50;
let c = 20;

if(a == b && b == c){
    console.log("Equilateral");
}else if(a ==b || b==c || c==a){
    console.log("Isosceles");
}else {
    console.log("Normal triangle");
}