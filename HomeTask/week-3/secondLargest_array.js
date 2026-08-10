// Find the second largest element.

let arr = [45,45,12];
let large = arr[0];
let secondLarge = arr[arr.length-1];
for(let i = 0; i < arr.length; i++){
    if(large < arr[i]){
        secondLarge = large;
        large = arr[i];
    }
}
console.log(secondLarge);