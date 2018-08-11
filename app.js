console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('Travis'));

var filteredArray = _.uniq(['Travis', 'Andrew', 'Travis', 1, 2, 1]);
console.log(filteredArray);


// console.log(notes.addNote());
// console.log(notes.add(1, 2));

// var user = os.userInfo();
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);