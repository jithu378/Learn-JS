//  occurance of a character.
let word = "ammaaa";
char = "a"
let count = 0;
let len = word.length;
for(let i=0;i<len;i++){
    if(char == word[i]){
        count++
    }
}
console.log(count);