
var mybutton=document.getElementById("heading")
var profile =document.getElementById("profile")

document.querySelectorAll(".mybutton")[0].addEventListener("click",function(){
    var text = this.innerHTML;
    console.log(text);

    switch(text){
        case "Click me":
      
    profile.classList.add('animateshow');
    
    }
})