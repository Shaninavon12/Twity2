function loginPage() {
	// CR MAJOR [logic]: you are giving a path to a file that is in the parent folder while the
	// file is in the same location as the source code
	window.location = "loginPage.html";
}
function registerPage() {
	// CR MAJOR [logic]: you are giving a path to a file that is in the parent folder while the
	// file is in the same location as the source code
	window.location = "registerPage.html";
}
window.onload = () => {
	// CR MAJOR [logic]: you are resetting the user details without checking if there are already users in the list.
	// therefore, with each reload all user info is vanished and I cannot login again.
	//DONE.
	if (localStorage.getItem("users") === null){
		const registeredUsers = [
			{"admin" : "123"}
		];
		localStorage.setItem("Users", JSON.stringify(registeredUsers));
		localStorage.setItem("connectedUser" , "admin");
	}
	
};