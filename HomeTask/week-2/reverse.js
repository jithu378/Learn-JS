//Reverse a string.

let word = "welcome to javascript";
let len = word.length;
let reverse = "";
for(let i=len-1;i>-1;i--){
    reverse += word[i];
}
console.log(reverse);