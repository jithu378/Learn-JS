// Print first even N natural numbers
// Count even numbers between 1 and N

let n = 89;
let count = 0;
for(let i = 1; i<=n; i++){
    if(i%2==0){
        console.log(i);
        count++;
    }
}
console.log(`count of even numbers is ${count}`);