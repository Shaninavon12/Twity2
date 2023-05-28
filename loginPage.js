function LoginUser() {
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
	// CR minor [syntax]: you can just retrieve the keys with Object.keys()
	for (const key in mappedUserProperty) {
		// CR minor [syntax]: never use "==" because it will converts the operands to strings first and
		// then will compare between them. for a better comparison use "===" operator instead.
		if (key == givenUser && mappedUserProperty[key] == givenPassword) {
			alert("login successful");
			// CR MAJOR [syntax]: TypeError - window.location is not a function
			// you should use this property as you used it in homePage.js
			window.location("./poster.html");
		}
	}
	alert("login fail");
}
