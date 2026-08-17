// Object.keys - show all keys in the object
let student = {
    name : "Jithu Biju",
    age : 21
}

console.log(Object.keys(student));
console.log(Object.keys(student).length);

// Object.values - show all the values in the object
console.log(Object.values(student));
console.log(Object.values(student).length);

//Object.entries - show all key value pair in the object
console.log(Object.entries(student));

// object.assign - copy one object to a new object
obj = Object.assign({},student);
console.log(obj);

//Object.freeze - cannot edit the current object
console.log(Object.freeze(obj));
obj.course = "mern";
student.course = "mern";
console.log(obj)
console.log(student)

//hasOwnProperty - show whether a property exist or not
console.log(student.hasOwnProperty("name"));