// Given two numbers, check if both are positive, and if so, check which one is larger.

let a = 150;
let b = 80;

if(a>0 && b>0){
    if(a>b){
        console.log(a, "is greater than",b);
    } else if(a==b){
        console.log(a, "and", b, "are equal");
    } else {
        console.log(b, "is greater than ", a);
    }
} else if(a==0 || b==0){
    console.log("Zero is either positive or negative");
} else {
    console.log("Numbers is not positive")
}