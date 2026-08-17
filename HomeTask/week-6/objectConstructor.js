

function Student(id,name,age,course){
    this.id = id;
    this.name = name;
    this.age = age;
    this.course = course;
}

Student.prototype.display = function(){
    console.log("hi")
}

let Student1 = new Student(1,"Jithu Biju",21,"MERN");
let Student2 = new Student(2,"Nandhakishor",21,"MERN");
let Student3 = new Student(3,"Prabin Pradeep",22,"MERN");
console.log(Student1);
Student1.display();
console.log(Student.prototype);
console.log(Student1.__proto__);
