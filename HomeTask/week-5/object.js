let obj = {
    name : "Jithu",
    age : 21
}

console.log(obj);
console.log(obj.name); // using dot notation
console.log(obj["name"]); // using  bracket dot notation
// console.log(obj[name]); // undefined

obj.role = "MERN Developer";
obj["city"] = "kottayam";
console.log(obj);

delete obj.role;
console.log(obj);

delete obj["city"]
console.log(obj);


// accessing key using for loop

for(let value in obj){
    console.log(obj[value]); //can be accessed only by bracket notation
}


//array using for in

let arr = [1,2,3];
for(let value in arr){
    console.log(arr[value]);
}

