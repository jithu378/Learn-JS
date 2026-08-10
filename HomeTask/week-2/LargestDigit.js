//Find the largest digit in a number

let num = 898310;
let val = num%10;
while(num>0){
    let large = num%10;
    if(large>val){
        val = large;
    }
    num = Math.floor(num/10);
}
console.log(val);