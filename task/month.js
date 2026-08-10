// Given a month number (1–12), print the number of days in that month (handle leap year for February).

let month = 13;
year = 2025;

switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Month has 31 Days");
        break;
    case 2:
        if(year % 4 ==0){
            console.log("Leap year so 29 Days");
        } else {
            console.log("28 Days");
        }
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Month has 30 Days");
        break;
    default:
        console.log("Not valid, enter number between 1 to 12");
}

