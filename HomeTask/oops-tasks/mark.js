class Student {
    #marks;

    constructor(name, marks) {
        this.name = name;
        this.#marks = marks;
    }

    setMarks(marks) {
        if (marks >= 0 && marks <= 100) {
            this.#marks = marks;
        } else {
            console.log("Marks must be between 0 and 100");
        }
    }

    getMarks() {
        return this.#marks;
    }
}

let student = new Student("John", 80);

console.log(student.getMarks());

student.setMarks(90);

console.log(student.getMarks());