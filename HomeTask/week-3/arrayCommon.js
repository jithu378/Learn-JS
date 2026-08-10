// Find common elements in two arrays.

let arr1 = [12,3,5,8,90];
let arr2 = [2,3,80,90,5];
let arr = [];
let temp;
for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
        if(arr1[i] == arr2[j]){
            temp = arr1[i];
            arr.push(temp);
        }
    }
}
console.log(arr);