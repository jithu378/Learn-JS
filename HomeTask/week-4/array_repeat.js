// Find the first repeated element.

let arr = [4,1,2,1,1,5,3,2,6,5];

for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] == arr[j]){
            console.log(arr[i]);
            i = arr.length;
            break;
        }
    }
}