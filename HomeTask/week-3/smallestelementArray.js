//Find the smallest elements in an array

let arr = [1,455,8,23,56,1];
let small = arr[0];
for(let i = 0; i < arr.length; i++){
    if(arr[i] < small){
        small = arr[i];
    }
}
console.log(small);