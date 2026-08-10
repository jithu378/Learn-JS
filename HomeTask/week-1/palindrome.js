// check a number is palindrome or not

let num = 1071;
let temp = num;
let r = 0;
while(temp > 0){
    r = r * 10 + temp % 10;
    temp = Math.floor(temp/10);
} if(r == num){
    console.log("Palindrome");
} else {
    console.log("Not palindrome");
}