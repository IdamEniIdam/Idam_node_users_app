const fs = require('fs');


var fetchUsers = () => {
	try {
		var usersString = fs.readFileSync('users-data.json');
		return JSON.parse(usersString)
	}catch(e) {
		return [];
	}
};

var saveUsers = (users) => {
	fs.writeFileSync('users-data.json', JSON.stringify(users));
};


var addUser = (email, number) => {
	// console.log('Adding user', email, number);
	var users = fetchUsers();
	var user = {
		email,
		number
	};


	var duplicateUsers = users.filter((user) => {
		return user.email === email;
	});

	if(duplicateUsers.length === 0) {
		users.push(user);
		saveUsers(users);
		return(user);
	}
};

var listUsers = () => {
	// console.log('Getting all users');
	return fetchUsers();
};

var viewUser = (email) => {
	console.log('Getting user', email);
	var users = fetchUsers();
	var filteredUsers = users.filter((user) => user.email === email);
	return filteredUsers[0];
};

var removeUser = (email) => {
	// console.log('Removing user', email);
	var users = fetchUsers();
	var filteredUsers = users.filter((user) => user.email !== email);
	saveUsers(filteredUsers);
	return users.length !== filteredUsers.length;
};

var logUser = (user) => {
	console.log('__');
	console.log(`Email: ${user.email}`);
	console.log(`Number: ${user.number}`);
};


module.exports = {
	addUser,
	listUsers,
	viewUser,
	removeUser,
	logUser
};