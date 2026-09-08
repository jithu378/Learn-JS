function Student(name, age, course){
    this.name = name;
    this.age = age;
    this.course = course;
}

let Students = [
    new Student("Jithu Biju",21,"MERN"),
    new Student("Prabin Pradeep",22,"MERN"),
    new Student("Nandhakishor",21,"MERN")
]

console.log(Students);

// Accessing Elements
console.log(Students[0]) // accesssing each element of the array