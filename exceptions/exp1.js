try{
    console.log("Program started");
    console.log(a);
    console.log("Program ended");
}

catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

finally{
    console.log("Program ended");
}

let age = 15;
try{
    if(age < 18){
        throw new Error("You are not eligible to vote");
    }
}

catch(Error){
    console.log(Error.name);
}

