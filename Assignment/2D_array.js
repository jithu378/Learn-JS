let arr = [[1,2,3],[2,3,1],[6,9,2]];

// array print
for (let i = 0; i < arr.length; i++) {
    let row = "";
    for (let j = 0; j < arr[i].length; j++) {
        row += arr[i][j] + " ";
    }
    console.log(row);
}

// push 
arr.push([10, 11, 12]);
console.log(arr);

//pop
arr.pop();
console.log(arr);

