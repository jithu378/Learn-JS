// 2.A teacher has stored marks of 5 subjects in an array.
// Write a function to:
// Calculate the total marks.
// Calculate the average.
// Print the grade using the following conditions:
// 90+  → Grade A
// 75+  → Grade B
// 50+  → Grade C
// Below 50 → Fail

let marks = [89,67,90,66,99];
let len = marks.length;

function total(mark){
    let sum = 0;
    for(let value of mark){
        sum += value;
    }
    return sum;
}

function average(avg,length){
    return (avg / length)
}

function grade(avg){
    if(avg >= 90){
        console.log("Grade : A");
    } else if(avg >= 75 && avg < 90) {
        console.log("Grade : B");
    } else if(avg >= 50 && avg < 75) {
        console.log("Grade : C");
    } else {
        console.log("Grade : Fail");
    }
}

let Sum = total (marks);
let Average = average(Sum, len);
console.log(`Total marks : ${Sum}`);
console.log(`Average : ${Average}`);
grade(Average);
