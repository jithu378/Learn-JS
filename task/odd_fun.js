// check a number is even or odd using function an also return the output

function oddNumber(n){
    for(let i=1; i<=n; i++){
        if(i%2!=0){
            console.log(i);
        }
    }
}

let num = 10;
oddNumber(num);