//  first occurance of a character.

let word = "ammaa";
char = "m"
if (char.length == 1){
    for(let i=0;i<word.length;i++){
        if(char == word[i]){
            console.log(`first occurance of '${char}' is in position ${i} `);
            break;
        }
    }
} else {
    console.log("enter only one character");
}
