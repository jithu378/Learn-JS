// 24 hrs time 

let Time = "29.01";
let time = Number(Time);

if(time >= 12.00 && time <=23.59){
    console.log(time, "PM");
}else if(time <=12.59 && time >=0){
    console.log(time, "AM")
}else {
    console.log("invalid time")
}
