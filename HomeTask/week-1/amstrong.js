// check a number is armstrong or not 

let num = 1634;
let temp = num;
let sum = 0;
let rem;
let count = 0;
while(num > 0){
    count++;
    num=Math.floor(num/10);
}

num=temp;
console.log(count);
while(temp > 0){
    rem = temp%10;
    sum+=rem ** count;
    temp = Math.floor(temp/10);
}

if(sum == num){
    console.log("Amstrong");
} else {
    console.log("Not amstrong");
}
