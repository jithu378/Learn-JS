// check if username matches, and inside that, check if the password matches. Print different messages for "wrong username", "wrong password", and "success".

let userName = "jithu";
let password = "jithu123";

let user = "jithu";
let pass = "123";

if(userName == user){
    if(password == pass){
        console.log("Login successful.");
    } else{
        console.log("Wrong password");
    }
} else {
    console.log("Wrong username / account does not exist");
}