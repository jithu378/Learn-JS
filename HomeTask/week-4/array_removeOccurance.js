// Remove all occurrences of a particular number from an array
let arr = [2,5,2,7,2,9];
let num = 2;

let result = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] != num){
        result.push(arr[i]);
    }
}

console.log(result);