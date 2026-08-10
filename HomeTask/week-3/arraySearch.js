// Search for an element

let arr = [12,45,23,89,0,2];
let search = 230;
let condition;
for(let i = 0; i < arr.length; i++){
    if(arr[i] == search){
        condition = 0;
    }
}
if(condition == 0){
    console.log(`${search} element found`);
} else {
    console.log(`${search} element not found`);
}