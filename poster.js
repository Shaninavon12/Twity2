function addNewTwits(){
    var newTwits = document.getElementById("newTwit").value;
    if (newTwits != "" ){
        var newTwit = document.createElement('li');
        newTwit.appendChild (document.createTextNode(newTwits));
        document.querySelector('ul').appendChild(newTwit);
    }
    else
    {
        alert("you have to write something");
    }   
}
