// marklist

let mark = 75;

if(mark >=0 && mark <=100){
    if (mark >= 90 ){
        console.log("A+");
    } else if(mark >= 75) {
        console.log("B");
    } else if (mark >= 50) {
        console.log("C");
    } else {
        console.log("Fail");
    }
} else {
    console.log("The number should be between 0 - 100");
}