let employee = {
    name : "Jithu Biju",
    salary : 38000,

    increment : function(percent){
        let salaryIncrement = (percent / 100) * this.salary;
        console.log(this.salary + salaryIncrement);
    }
}

let increment = 10;
employee.increment(increment);