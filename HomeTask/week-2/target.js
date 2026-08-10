//count how many times a target value occur in  a number

let num = 2212;
let target = 4;
let count = 0;
while(num>0){
    let se = num%10;
    if(se==target){
        count++;
    }
    num = Math.floor(num/10);
}
console.log(count);