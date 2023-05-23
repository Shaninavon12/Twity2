function loginPage(){
    window.location = "../loginPage.html";
}
function registerPage(){
    window.location = "../registerPage.html";
}
window.onload =()=>{
    const newUser = {
        name : 'admin',
        password : '123'};
    const a = new Array();
    a.push(newUser);
    localStorage.setItem('Users', JSON.stringify(a));
}