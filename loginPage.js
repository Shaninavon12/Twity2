function LoginUser() {
	const registeredUsers = JSON.parse(localStorage.getItem("Users"));
	const givenUser = document.getElementById("username").value;
	const givenPassword = document.getElementById("password").value;
	const checkPassword =registeredUsers.find(user => user[givenUser]);
	if (checkPassword && checkPassword[givenUser] === givenPassword){
			localStorage.setItem("connectedUser" , givenUser);
			alert("login successful");
			window.location = "poster.html";
	}
	else{
		alert("login fail");
	}
	
}