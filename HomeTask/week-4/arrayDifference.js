// Find the difference between two arrays

let arr1 = [23,44,2,1];
let arr2 = [1,45,78,23,44];
let diff = [];

function differentArray(a,b){
    for(let i = 0; i < a.length; i++){
        flag = 0;
        for(let j = 0; j < b.length; j++){
            if(a[i] == b[j]){
                flag = 1;
                break;
            }
        }
        if(flag == 0){
            diff.push(a[i]);
        }
    }
}

differentArray(arr1,arr2);
differentArray(arr2,arr1);
console.log(diff);

