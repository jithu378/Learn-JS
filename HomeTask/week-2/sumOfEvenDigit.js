// find sum of even digits in a number
let num = 1834;
let sum = 0;
while(num>0){
    let d = num%10;
    if(d%2==0){
        sum+=d;
    }
    num=Math.floor(num/10);
}
console.log(sum);