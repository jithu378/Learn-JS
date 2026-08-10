// Check if a number is between 1 and 100, and if so, whether it's divisible by 5

let num = 55;

if(num > 0 && num < 100){
    if(num % 5 == 0){
        console.log(num, "is divisible by 5");
    } else{
        console.log(num, "is not divisible by 5");
    }
} else{
    console.log("The number is not between 0 - 100");
}

