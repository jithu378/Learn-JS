let num = 7;
let pattern = "*";
for(let i=1; i<=num; i++){
    let sqrt = Math.sqrt(i);
    if(Number.isInteger(sqrt)){
        console.log(pattern.repeat(i*2));
    } else {
        console.log(pattern.repeat(i));
    }
}