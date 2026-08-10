// check a number is perfect or not

let num = 28;
let sum = 0;
for (let i =1; i<num; i++){
    if(num%i==0){
        sum+=i;
    }
}
if(sum == num){
    console.log("Perfect number");
} else {
    console.log("Not perfect number");
}