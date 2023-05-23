function register()
{
    const  registeredUsers= JSON.parse(localStorage.getItem('Users'));
    const givenUser = document.getElementById("username").value;
    const givenPassword = document.getElementById("password").value;
    const mappedUserProperty =Object.fromEntries(
        registeredUsers.map(e => [e.name , e.password])
    );
    if(!(givenUser in mappedUserProperty)){
        const newUser = {
            name : givenUser,
            password : givenPassword
        };
        registeredUsers.push(newUser);
        localStorage.setItem('Users' , JSON.stringify(registeredUsers));
        alert("You have successfully registered!");
        window.location = "./poster.html";
    }
    else
    {
        alert("This user is already registered");
    }
}   