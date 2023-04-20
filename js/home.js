let button1=document.querySelector("#quiz1");
let button2=document.querySelector("#quiz2");
let button3=document.querySelector("#quiz3");
let logOut =document.querySelector("#logOut")



let welcome=document.querySelector("#massage-welc");

function onload (){
    if(sessionStorage.getItem('currentUser') === null){
        console.log("sessionStorage is empty")
    }
    else {
        let user=JSON.parse(sessionStorage.getItem('currentUser'));
        let userName=user.Name;
        console.log("session is full "+"user is "+userName)
        welcome.textContent="Welcome "+userName;
        logOut.style.display="block";
    }
}
window.addEventListener('load', onload);

button1.addEventListener('click',function(){
    if(sessionStorage.getItem('currentUser') === null){
        alert("Please log in to enter the quiz");
        return
    } else
    window.location.href="/quiz3.html";
});
button2.addEventListener('click',function(){
    if(sessionStorage.getItem('currentUser') === null){
        alert("Please log in to enter the quiz");
        return
    } else
    window.location.href="/quiz2.html";
    });
button3.addEventListener('click',function(){
    if(sessionStorage.getItem('currentUser') === null){
        alert("Please log in to enter the quiz");
        return
    } else
        window.location.href="/quiz1.HTML";
        }); 
logOut.addEventListener('click',function(){
    sessionStorage.clear();
    window.location.href="index.html";
});


