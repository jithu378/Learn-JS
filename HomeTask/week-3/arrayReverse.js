// Reverse an array

let arr = [12,3,67,80,2];
let rev = [];
for(let i = arr.length-1; i >= 0; i--){
    console.log(arr[i]);
    for(let j = 0; j < arr.length; j++){
        rev[i] = arr[j];
    }
}
