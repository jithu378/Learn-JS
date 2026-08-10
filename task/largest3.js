// largest of 3 number 

let a = 20;
let b = 40;
let c = 12;

if(a>b){
    if(a>c){
        console.log(a, "is greater than", b, "and", c);
    }
    else{
        console.log(c, "is greater than", a, "and", b);
    }
}else if(b>c){
    console.log(b, "is greater than", a, "and", c);
}else {
    console.log(c, "is greater than", b, "and", a);
}