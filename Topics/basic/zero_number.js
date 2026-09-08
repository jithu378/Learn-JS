let num = 100003;
let count = 0;
while(num > 0){
    if(num%10==0){
        count++;
    }
    num=Math.floor(num/10);
}
console.log(count);