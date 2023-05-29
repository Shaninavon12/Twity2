function register() {
	const registeredUsers = JSON.parse(localStorage.getItem("Users"));
	const givenUser = document.getElementById("username").value;
	const givenPassword = document.getElementById("password").value;
	// CR minor [clarity]: what is e?
	// rename this variable to a more indicative name
	// CR minor [clean code]: why you are not saving the user details in a format that
	// wouldn't require you to do extra operations? just build an object that is
	// better suites you that you can use directly with processing
	const mappedUserProperty = Object.fromEntries(
		registeredUsers.map((e) => [e.name, e.password])
	);

	if (!(givenUser in mappedUserProperty)) {
		//CR minor [format]: improve this format so you wouldn't need to do extra work to process the data.
		const newUser = {
			name: givenUser,
			password: givenPassword,
		};
		registeredUsers.push(newUser);
		localStorage.setItem("Users", JSON.stringify(registeredUsers));
		alert("You have successfully registered!");
		window.location = "./poster.html";
	} else {
		alert("This user is already registered");
	}
}
