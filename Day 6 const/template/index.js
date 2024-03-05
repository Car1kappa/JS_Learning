// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference; 

// PI = 420.69;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

document.getElementById('submit').onclick = function(){
    radius = document.getElementById('myText').value;
    circumference = 2* PI * radius
    document.getElementById("myH3").textContent = circumference + "cm";
}
