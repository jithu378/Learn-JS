// From 1 to N check if the number is divisible by both 3 and 5 print fizzbuzz
// Or if it is only divisible by 3 print fizzz 
// Or if it is divisible by 5 print buzzz

let n = 88;
for(let i = 1; i<=n; i++){
    if(i%3==0 && i%5==0){
        console.log("fizzbuzz");
    } else if (i%3==0){
        console.log("fizz");
    } else if (i%5==0){
        console.log("buzz");
    }
}