let num = 124334;
let count = 0;
while(num > 0){
    if(num%2==0){
        count++;
    }
    num=Math.floor(num/10);
}
console.log(count);