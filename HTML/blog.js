
const blog = document.getElementById('formBlog')



formBlog.addEventListener('submit',function(event){
    event.preventDefault()//prevent the form form outosubmitting//

    

    var username = document.getElementById('username').value
   
    console.log(username)

    var email = document.getElementById('email').value
    
    console.log(email)

    const request = new XMLHttpRequest();
    
    request.open("post", "login.php");
   
    request .onload = function (){
       
        console.log(request.responseText);
    }

    request.send(new FormData(formBlog));
});
