function LoginUser() {
    const registeredUsers = JSON.parse(localStorage.getItem('Users'));
    const givenUser = document.getElementById("username").value;
    const givenPassword = document.getElementById("password").value;
    const mappedUserProperty =Object.fromEntries(
        registeredUsers.map(e => [e.name , e.password])
    );
    for (const key in mappedUserProperty){
        if(key == givenUser && mappedUserProperty[key] == givenPassword){
            alert('login successful');
            window.location("./poster.html");
        }
    }
    alert('login fail');
}