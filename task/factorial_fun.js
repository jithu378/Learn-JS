//find factorial of a number using function

function factorial(num){
    let f = 1;
    for(let i=1; i<=num; i++ ){
        f*=i;
    }
    return f;
}

let num = 5;
let res = factorial(num);
console.log(res);