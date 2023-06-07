function register() {
    const registeredUsers = JSON.parse(localStorage.getItem("Users"));
	const givenUser = document.getElementById("username").value;
	const givenPassword = document.getElementById("password").value;
    if (registeredUsers.some((object) => object.hasOwnProperty(givenUser))){
        alert("This user is already registered");
    } 
    else {
        const newUser = {
			[givenUser] : givenPassword
		};
        registeredUsers.push(newUser);
        localStorage.setItem("Users", JSON.stringify(registeredUsers));
		alert("You have successfully registered!");
		window.location = "./poster.html";
    }
}
