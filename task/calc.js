// calclator

let a = 10;
let b = 0;
let operator = '/';

switch(operator){
    case '+' :
        console.log(a + b);
        break;
    case '-' :
        console.log(a - b);
        break;
    case '*' :
        console.log(a * b);
        break;
    case '/' :
        if(b==0){
            console.log("Division is not possible");
            break;
        }
        console.log(a / b);
        break;
    case '%' :
        console.log(a % b);
        break;
}