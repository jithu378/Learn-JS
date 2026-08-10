// 1.A classroom attendance is stored as
// "PPAAPPPAPPA
// where
// P → Present
// A → Absent
// Write a program to count
// Total Present
// Total Absent


let str = "PPAAPPPAPPA";
let lower = str.toLowerCase();
let arr = lower.split("");
let Present = 0;
let Absent = 0;
for(let value of arr){
    if(value == 'p'){
        Present++;
    } else if(value == 'a'){
        Absent++;
    }
}
console.log(`Total present is ${Present}`);
console.log(`Total absent is ${Absent}`);
