// Merge two arrays.

let arr1 = [1,5,33,89,23];
let arr2 = [10,45,33,99,3];
let merge = [];
for(let i = 0; i < arr1.length; i++){
    merge.push(arr1[i]);
}
for(let i = 0; i < arr1.length; i++){
    merge.push(arr2[i]);
}
console.log(merge);