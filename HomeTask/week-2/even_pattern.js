let row = 7;
for(let i=1; i<=row; i++){
    let temp = "";
    let pattern;
    if(i==1 || i==2){
        pattern = 2;
    } else if(i%2==0){
        pattern = i;
    } else {
        pattern = i * 2;
    }

    for(let j=1;j<=pattern;j++){
        temp += "*";
    }
    console.log(temp);
}
