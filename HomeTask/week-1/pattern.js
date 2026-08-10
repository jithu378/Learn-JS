// print the following pattern
//   *
//   * *
//   * * *
//   * * * *

let pattern = "";
for(let i = 1; i<=4; i++){
    for(let j = i; j<=i; j++){
        pattern += " *";
    }
    console.log(pattern);
}

//   * * * *
//   * * *
//   * *
//   *

for(let i = 4; i>=1; i--){
    let patterns = "";
    for(let j = 1; j<=i; j++){
        patterns += " *";
    }
    console.log(patterns)
}

//Pattern 5
let n = 4;
for(let i=1;i<=n;i++){
    let r = "";
    r+=" ".repeat(n-i);
    for(let j=1;j<=i;j++){
        r+="* ";
    }
    console.log(r);
}
for(let i=3;i>=1;i--){
    let r = "";
    r+=" ".repeat(n-i);
    for(let j=1;j<=i;j++){
        r+="* ";
    }
    console.log(r);
}