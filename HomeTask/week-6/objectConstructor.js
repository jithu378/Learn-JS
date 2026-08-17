// Student is the constructor here
// Constructor has prototype
// Object has __proto__


// Constructor
function Student(id,name,age,course){
    this.id = id;
    this.name = name;
    this.age = age;
    this.course = course;
}

// shared function is stored in prototype
Student.prototype.display = function(){
    console.log("hi")
}

// call each object from the constructor
let Student1 = new Student(1,"Jithu Biju",21,"MERN");
let Student2 = new Student(2,"Nandhakishor",21,"MERN");
let Student3 = new Student(3,"Prabin Pradeep",22,"MERN");

console.log(Student1); // print obj-1
Student1.display(); // print obj-1 display()

// __proto__ link to prototype 

console.log(Student.prototype); 
console.log(Student1.__proto__);
