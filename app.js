console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var result = notes.addNote();
console.log(result);

var result2 = notes.add(1, 2);
console.log(result2);

// var user = os.userInfo();


// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);