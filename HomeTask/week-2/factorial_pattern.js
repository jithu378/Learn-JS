let row = 4;
let pattern = "*";
let temp=1;
for(let i = 1; i<=row; i++){
    temp*=i;
    console.log(pattern.repeat(temp));
}