let arr = [45,6,90,3,19,88];
for(let i = 0; i < arr.length-1; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);
let low = 0;
let high = arr.length-1;
let search = 6;
for(let i = 0; low <= high; i++){
    let mid = Math.floor((low + high)/2);
    if(search == arr[mid]){
        console.log(`Search element ${search} found`);
        break;
    } else if(search > arr[mid]){
        low = mid + 1;
    } else if(search < arr[mid]){
        high = mid - 1;
    }
}
