//Print the words that start with a vowel

let word = "Elcome to avascript erogramming";
let cap = word.toUpperCase();
let space = "";
for(let i = 0; i<cap.length; i++){
    if(cap[i] != " "){
        space += cap[i];
    } else {
        if(space[0]=="A" || space[0]=="E" || space[0]=="I" || space[0]=="O" || space[0]=="U" ){
            console.log(`${space} is vowel`);
        }
        space = "";
    }
}
if(space[0]=="A" || space[0]=="E" || space[0]=="I" || space[0]=="O" || space[0]=="U" ){
            console.log(`${space} is vowel`);
        }
        

