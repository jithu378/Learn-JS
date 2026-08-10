// Count even nunbers in an array

let arr = [12,3,67,80,2];
let count = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i]%2==0){
        count++;
    }
}
console.log(count);