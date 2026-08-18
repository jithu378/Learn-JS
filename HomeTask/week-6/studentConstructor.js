// Task 1: Student Details
// Create a constructor called Student with properties:
// id, name, age, course
// Create two student objects and display all their details.

function Student(id, name, age, course){
    this.id = id;
    this.name = name;
    this.age = age;
    this.course = course;
}

let Student1 = new Student(1,"Jithu Biju",21,"MERN");
let Student2 = new Student(2,"Nandhakishor",21,"MERN");
let Student3 = new Student(3,"Prabin Pradeep",22,"MERN");

console.log(Student1);
console.log(Student2);
console.log(Student3);