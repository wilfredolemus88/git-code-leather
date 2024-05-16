//STRINGS

//var phrase = 'Strings are cool ';
//var text = "are cool";

//Writing alerts to screen
//alert("working");


//Using methods in to call back different information from a string
//document.write(phrase.length);
//document.write(phrase.toLowerCase());

//Calling out items using idexing 012345 tec...
//document.write(phrase.charAt(1));
//document.write(phrase.indexOf("v"));
//document.write(phrase.substring(0, 3));
//document.write(phrase.substring(phrase.indexOf("c"), phrase.legnth));

//Concatenating strings toguetherd
//document.write(phrase + " " + text);

//MATH AND NUMBERS

//var number = -2;
//document.write(4546464.53465);
//document.write(number*(2+7));
//document.write(3%2);

//USING METHODS IN MATH

//document.write(Math.abs(number));

//GETTING USER INPUT

//var name = window.prompt("What is your name?");
//var age = window.prompt("How odl are you?");

//document.write("Hey " + name + " , How are you today? Do you like being " + age + " years old?");

//CREATING A CALCULATOR

//var num1 = window.prompt("Enter a number");
//var num2 = window.prompt("Enter another number");

//num1 = parseFloat(num1);
//num2 = parseFloat(num2);

//document.write(num1 + num2);

//ARRAYS

//var fruits = "Apples!  Oranges!  Pears";

//document.write(fruits);
//document.write(fruits.length);

//fruits = fruits.split("!");
//document.write(fruits[2]);

//FUNCTIONS

//function sayHi(name, age){

    //var name = "Joe";
    //var name = "Joe";
   // document.write("<h1> Hello " + name + "</h1>");
   // document.write("<p> You are " + 23 + "</p>");
    //alert("This is a test!");


//}
//sayHi("Wilfredo" , 23);
//sayHi("Joe");

//sayHi("Mike");

//function addition(num1, num2){
//num1 + num2;
// num1 + num2;

//}
//var addedNumbers = addition(4, 100);
//document.write(addedNumbers);
//console.log("this is a funtion to add 2 numbers");


//ACCESSING HTML ELEMENTS

//var header = document.getElementById("header");//
//header.innerHTML = "This is my page";//

//EVENT LISTENERS
//using atributes inside HTML
//function handleClick(element){
  //  alert("You are about to go to Youtube! ");
   // element.innerHTML = "You Have Clicked This Button"
    //element.style="background-color:blue";

//}
//Monitoring for clicks from the JS file only

/*var image = document.getElementById("image");

image.addEventListener("mouseover", function(){
    this.style ="box-shadow: 6px 6px 6px blue";
    this.width ="600";
});

image.addEventListener("mouseout", function(){
    this.style ="";
    this.width ="300";
});

//BUILDING MESSAGEING APP

/*var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
    var newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";

});*/

//IF STATEMENTS

/*var isMale = false;
var isTall = false;
    if(isMale && isTall){
        document.write("You are a tall male");
    }  else if(isMale && !isTall){
        document.write("You are a short male");
    } else if(!isMale && isTall){
        document.write("You are not male, but you are tall");
    } else{
        document.write("You are not tall and not male");
    }*/

//ANOTHER IF STATEMENT 
// What number is the biggest?

/*function max(num1, num2, num3){
    if(num1 >= num2 && num1 >= num3){
        return num1;
    }else if (num2 >= num1 && num2 >= num3){
        return num2;
    }else {
        return num3;
    }
    }

document.write(max(5, 6, 2));*/


//SWITCH STATEMENTS
//For comparing one value to another

/*function getDayName(dayNum){
    var day;
    switch(dayNum){
        case 0:
            day ="Sunday";
            break;
        case 1:
            day ="Monday";
            break;
        case 2:
            day ="Tuesday";
            break;
        case 3:
            day ="Wednesday";
            break;   
        case 4:
             day ="Thursday";
            break;
        case 5:
            day ="Friday";
            break;
        case 6:
            day ="Saturday";
            break;
        default:
            day = "Day doesn't exist," + dayNum + " isn't a valid number";


    }

    return day;
    }
   document.write(getDayName(100));*/

   //OBJECTS 

   /*let person = {
    name:"Mike",
    age: 23,
    isMale: true,
    occupation: "programer",
    printName: function(){
        document.write("<h1>"+ this.name +"</h1>");

    }


   person.printName();
   document.write(person.name);
    document.write(person.age);*/

//OBJECTS IN REAL WORLD
//Creating a movie ofject

/*let myMovie = {
    title: "The Social Network",
    realiseYear: "2010",
    duration: "2.0",
    actors: [
        {
            name: "Jesssi Eisenberg",
            birthday: new Date("October 5, 1985"),
            hometown:"NY, NY"
        },
    {
            name: "Roonie Mara",
            birthday: new Date("April 17, 1987"),
            hometown:"Bedford, NY" 
    },

    ]
}
document.write(myMovie.actors[1].name);*/

//WHILE LOOPS

/*let i = 1;

while(i <= 10){
document.write(i + "<br/>")
i++;

}*/

//FOR LOOPS
//To have answerds print in separate lines: +"<br/>"
/*for(let i = 0; i < 10; i++){
    document.write(i +"<br/>" )
}*/


//BUILDING A PASSWORD CHECKER

/*let password = "wordpass";
let response;
let entryCount = 0;
let entryLimit = 3;
let error = false;

while(response != password && !error){
    if(entryCount < entryLimit){
    response = window.prompt("Enter Password");
    entryCount++;

}else {
    error = true;
}
}
if(error){
    alert("Too may entries");
}  else {
     alert("You got it!");

}*/



//CREATING A MULIPLE CHOICE TEST

/*let questions = [
    {
    prompt: "What color are apples?\n(a) Red/Green\n\ (b) Purple\n(c) Orange",
    answer: "a"
    },
    {
    prompt: "What color are bananas?\n(a) Teal/Green\n\ (b) Magenta\n(c) Yellow",
    answer: "c"
},
{
    prompt: "What color are strawberries?\n(a) Yellow/Green\n\ (b) Red\n(c) Blue",
    answer: "b"
},

]
let score = 0;
for (let i=0; i < questions.length; i++){
    let response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Correct");
}   else {
    alert("Wrong answer!");
}
}
alert("You got" + score + "/" + questions.length);*/

//LOCAL WEB STORAGE

/*let textbox = document.getElementById("textbox");
let button = document.getElementById("btn");

button.addEventListener("click", function(){
    localStorage.name = textbox.value;


});
document.write(localStorage.name);*/
