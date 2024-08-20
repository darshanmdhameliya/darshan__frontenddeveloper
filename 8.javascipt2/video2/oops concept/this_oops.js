const user = {
    username: "darshan",
    loginCount: 8,
    signedIn: true,

    getuserdetails: function () {
        // console.log('got the user daetils from database');
        // console.log(`username : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username)
// console.log(user.getuserdetails());
// console.log(this); 

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = User("darshan", 12, true)
console.log(userOne);
