// check a number is prime number upto n

let num = 30;
for(let i=2;i<=num; i++){
    let count = 0;
    for(let j=1; j<=i; j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==2){
        console.log(i);
    }
}