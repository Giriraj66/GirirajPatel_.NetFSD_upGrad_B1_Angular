class User {

    constructor(password) {
        this._password = password;
    }
    set password(newPassword) {
        if (newPassword.length >= 6) {
            this._password = newPassword;
        } else {
            console.log("Password must be at least 6 characters");
        }
    }
    get password() {
        return this._password;
    }
}

let u1 = new User("123456");
console.log(u1.password);  
u1.password = "abc";       
u1.password = "abcdef";     
console.log(u1.password);