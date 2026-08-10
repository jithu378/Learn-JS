//find smallest digit in a number

let num = 8798;
let val = num%10;
while(num>0){
    let small = num%10;
    if(small<val){
        val = small;
    }
    num = Math.floor(num/10);
}
console.log(val);