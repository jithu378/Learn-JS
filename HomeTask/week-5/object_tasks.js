// 1.create a student Object with following properties
//     ->name,age,city
// and print all the values

let student = {
    name : "Jithu",
    age : 20,
    city : "Kottayam"
}
for(let values in student){

    console.log(`${values} : ${student[values]}`);
}

console.log("");
// 2.Create an employee object with:
// ID
// Name
// Department
// Salary
// ->Print only the employee's name and salary.

let employee = {
    id : 5173,
    name : "Jithu",
    department : "Web Development",
    salary : 55000
}

console.log(employee.name);
console.log(employee.salary);

console.log("");

// 3.Add a new property called course  in the student object with the value "MERN"
employee.course = "MERN";
console.log(employee);

console.log("");

// 4.Update the age of a student from 20 to 21.
student.age = 21;
console.log(student);

// 5.Remove the city property from the object.
delete student.city;
console.log(student);

console.log("");
// 6.create an object, print all the property names using a loop.
let games = {
    name : "GTA 5",
    category : "Role Playing",
    genre : "Action-adventure"
}

for(let key in games){
    console.log(key);
}

console.log("");

// 7.Print only the values using loop
for(let key in games){
    console.log(games[key]);
}

console.log("");

// 8.Find how many properties an object contains
let count = 0;
for(let key in games){
    count++;
}
console.log(`count of properties in the object 'game' is ${count}`);