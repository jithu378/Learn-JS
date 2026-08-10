let obj = {
    name : "Jithu",
    address : {
        city : "Kottayam",
        state : "Kerala"
    }
}

// for(let value in employee.address){
//     console.log(employee.address[value])
// }

// for(let key in obj){
//     for(let value in obj[key]){
//         console.log(obj[key][value]);
//     }
// }

for(let key in obj){
    if(typeof(obj[key])=="object"){
        for(let value in obj[key]){
            console.log(`${key} : ${obj[key][value]}`)
        }
    }
    else{
        console.log(`${key} : ${obj[key]}`)
    }
}
