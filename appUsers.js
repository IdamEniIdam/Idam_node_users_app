const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const userRegistration = require('./userRegistration.js');

const argv = yargs.argv;
var command = argv._[0];


if(command === 'addUser') {
	var user = userRegistration.addUser(argv.email, argv.number);
	if (user) {
		console.log('User created');
		userRegistration.logUser(user);
	}else{
		console.log('User email taken');
	}
}else if(command === 'listUsers'){
	var allUsers = userRegistration.listUsers();
	console.log(`Printing ${allUsers.legnth} user(s).`);
	allUsers.forEach((user) => {
		userRegistration.logUser(user);
	});																						
}else if(command === 'viewUser'){
	var user = userRegistration.viewUser(argv.email);
	if(user) {
		console.log('User found')
		userRegistration.logUser(user);
	}else{
		console.log('User not found');
	}
}else if(command === 'removeUser'){
	var userRemoved = userRegistration.removeUser(argv.email);
	var message = userRemoved ? 'User was removed' : 'User not found';
	console.log(message);
}else{
	console.log('Command not recognize');
}

	// var result = userRegistration.addUsername();
	// console.log(result);

	// console.log('Age:', userRegistration.add(10, 19));
	// var age = userRegistration.add(10, 19);

	// fs.appendFileSync('registrationDetails.txt', `my name is ${name} and am ${age} years old`);
