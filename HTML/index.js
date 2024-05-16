//function handleClick(element){
// element.innerHTML = "SUSBCRIBED!"
//}


//This section deals with forms
/*const form = document.getElementById("form")



form.addEventListener('submit',function(event){
    event.preventDefault()//prevent the form form outosubmitting//

    

    var username = document.getElementById('username').value
   
    console.log(username)

    var email = document.getElementById('email').value
    
    console.log(email)

    var request = new XMLHttpRequest();
    
    request.open("post", "login.php");
   
    request .onload = function (){
       
        console.log(request.responseText);
    }

    request.send(new FormData(form));
});*/

//THIS SECTION DEALS WITH NAVEGATION BAR

//HOME
let home = document.getElementById("home")

home.addEventListener("mouseover", function(){
   this.style ="box-shadow: 10px 10px 10px Yellow";
    this.width ="70";
});
home.addEventListener("mouseout", function(){
    this.style ="";
    this.width ="30";
});


//ABOUT
let about = document.getElementById("about")

about.addEventListener("mouseover", function(){
   this.style ="box-shadow: 10px 10px 10px Yellow";
    this.width ="70";
});
about.addEventListener("mouseout", function(){
    this.style ="";
    this.width ="30";
});

//GALLERY

let gallery = document.getElementById("gallery")

gallery.addEventListener("mouseover", function(){
   this.style ="box-shadow: 10px 10px 10px Yellow";
    this.width ="70";
});
gallery.addEventListener("mouseout", function(){
    this.style ="";
    this.width ="30";
});

//WORKSHOPS

let worshops = document.getElementById("workshops")

workshops.addEventListener("mouseover", function(){
   this.style ="box-shadow: 10px 10px 10px Yellow";
    this.width ="70";
});
workshops.addEventListener("mouseout", function(){
    this.style ="";
    this.width ="30";
});

//BLOG

let blog = document.getElementById("blog")

blog.addEventListener("mouseover", function(){
   this.style ="box-shadow: 10px 10px 10px Yellow";
    this.width ="70";
});
blog.addEventListener("mouseout", function(){
    this.style ="";
    this.width ="30";
});


// CONTACS

let contacts = document.getElementById("contacts")

contacts.addEventListener("mouseover", function(){
   this.style ="box-shadow: 10px 10px 10px Yellow";
    this.width ="70";
});
contacts.addEventListener("mouseout", function(){
    this.style ="";
    this.width ="30";
});

//MOUSE OVER EVENTS FOR USER INPUT

//event listener SAVE
let save = document.getElementById("save")

save.addEventListener("mouseover", function(){
   this.style ="box-shadow: 10px 10px 10px Yellow";
    this.width ="70";
});
save.addEventListener("mouseout", function(){
    this.style ="";
    this.width ="30";
});

//event listener SUBSCRIBE
let button_1 = document.getElementById("button_1")

button_1.addEventListener("mouseover", function(){
   this.style ="box-shadow: 10px 10px 10px Yellow";
    this.width ="70";
});
button_1.addEventListener("mouseout", function(){
    this.style ="";
    this.width ="30";
});

//event listener REGISTER
let submit = document.getElementById("submit")

submit.addEventListener("mouseover", function(){
   this.style ="box-shadow: 10px 10px 10px Yellow";
    this.width ="70";
});
submit.addEventListener("mouseout", function(){
    this.style ="";
    this.width ="30";
});


//LOCAL WEB STORAGE

let username = document.getElementById("username");


username.addEventListener("click", function(){
    localStorage.name = username.value;


});
document.write(localStorage.name);