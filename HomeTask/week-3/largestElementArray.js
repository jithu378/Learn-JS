//Find the largest elements in an array

let arr = [1,455,8,23,56,1];
let large = arr[0];
for(let i = 0; i < arr.length; i++){
    if(arr[i] > large){
        large = arr[i];
    }
}
console.log(large);