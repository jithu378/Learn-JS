// Task 2: Employee Details
// Create an Employee constructor with properties:

// id, name, department, salary
// Create two employee objects and print their details.

function Employee(id, name, department, salary){
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
}

Employee.prototype.display = function(){
    console.log(`ID : ${this.id}`);
    console.log(`Name : ${this.name}`);
    console.log(`Department : ${this.department}`);
    console.log(`Salary : ${this.salary}`);
    console.log("");
}

let employee1 = new Employee(1001,"Joel", "MERN", 47000);
let employee2 = new Employee(1002,"Anandhavshnu","Logistics",39000);

employee1.display();
employee2.display();
