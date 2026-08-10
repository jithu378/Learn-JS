//  string palindrome.

let word = "amma";
let len = word.length;
let reverse = "";
for(let i=len-1;i>-1;i--){
    reverse += word[i];
}

if(reverse ==word){
    console.log(`${word} is palindrome`);
} else {
    console.log(`${word} is not palindrome`);
}