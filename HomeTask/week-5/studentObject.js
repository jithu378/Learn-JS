let student = {
    name : "Jithu Biju",
    age : 21,
    course : "MERN",
    display : function(){
        for(let value in student){
            if(typeof(student[value]) !== "function"){
                console.log(`${value} : ${student[value]}`);
            }
        }
    }
}

student.display();