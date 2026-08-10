// Find product of digits

let num = 23;
let prod = 1;
while(num>0){
    let d = num%10;
    prod*=d;
    num=Math.floor(num/10);
}
console.log(prod);