// Find the missing number from an array containing numbers from 1 to 10

let arr = [1,2,3,4,5,6,7,8,9];
let start = 1;
let end = 10;
let sum = 0;
let missing;
for(let i=start; i <= end; i++){
    sum += i;
}

if(arr.length == end-1){
    for(let i = 0; i < arr.length; i++){
        missing += arr[i];
    }
    console.log(`Missing number is ${sum - missing}`)
} else if(arr.length == end){
    console.log("No missing numbers")
} else {
    console.log("Their is more than 2 numbers are missing!")
}