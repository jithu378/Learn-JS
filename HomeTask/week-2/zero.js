//Check whether a number ends with 0

let num = 12;
if(num == 0){
    console.log("NUmber is already zero");
} else {
    if(num%10 ==0){
        console.log("Number ends with zero");
    } else {
        console.log("Number not ends with zero");
    }
}

// let num = 12;
// if(num == 0){
//     console.log("Its already zero");
// } else(num !==0){
//     let str = String(num);
//     let len = str.length-1;
//     if(str[len]==0){
//         console.log("Number ends with zero");
//     } else {
//         console.log("Number not ends with zero")
//     }
// }