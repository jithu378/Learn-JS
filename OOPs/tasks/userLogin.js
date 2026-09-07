class User {
    #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    changePassword(oldPassword, newPassword) {
        if (oldPassword === this.#password) {
            this.#password = newPassword;
            console.log("Password changed successfully");
        } else {
            console.log("Old password is incorrect");
        }
    }

    login(password) {
        if (password === this.#password) {
            console.log("Login Successful");
        } else {
            console.log("Invalid Password");
        }
    }
}

let user = new User("john123", "12345");

user.login("12345");

user.changePassword("12345", "67890");

user.login("67890");