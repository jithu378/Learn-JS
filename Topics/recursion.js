// function count(n){
//     if(n==0){
//         console.log("Count stopped...");
//         return;
//     }
//     console.log(n);
//     count(n-1);
// }
// count(5);


// function fact(n){
//     if(n==1){
//         return 1;
//     }
//     return n * fact(n-1);
// }
// console.log(fact(5));

function count(n){
    if(n == 0){
        return;
    }
    count(n-1);
    console.log(n);
}
count(5);
console.log("Count stopped.........");