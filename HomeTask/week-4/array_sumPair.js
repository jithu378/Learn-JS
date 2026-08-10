// Find all pairs whose sum is equal to a given number

let arr = [1,2,3,4,5,6];
let sum = 7;

for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] + arr[j] == sum){
            console.log(arr[i], arr[j]);
        }
    }
}