
let row = 7;
let pattern = "*"
for(let i=1;i<=row; i++){
    let count = 0;
    let temp = "";
    for(let j=1; j<=i; j++){
        if(i%j==0){
            count++;
        }
        temp = temp + pattern;
    }
    if(count==2){
        console.log(temp+pattern);
    }
    else {
        console.log(temp);
    }
}
