// print odd numbers from 1 to N using function by passing N to function
function oddEven(num){
    if(num%2==0){
        return "Even";
    } else{
        return "Odd";
    }
}
let num = 51;
let res = oddEven(num);
console.log(res);
