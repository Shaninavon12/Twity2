function addNewTwits() {
	// CR MAJOR [logic]: there is no need to save the tweets in the local storage?
	//No.
	var newTwits = document.getElementById("newTwit").value;
	if (newTwits != "") {
		var newTwit = document.createElement("li");
		newTwit.appendChild(document.createTextNode(newTwits));
		document.querySelector("ul").appendChild(newTwit);
	} else {
		alert("you have to write something");
	}
}
