window.onload = function () {
    alert("Welcome to Shanti's Portfolio Website!");
};

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Your message has been sent successfully!");

});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        console.log("Button Hovered");
    });
});

// Show current time in console
setInterval(() => {
    console.log("Current Time: " + new Date().toLocaleTimeString());
}, 1000);

// Greeting according to time
let hour = new Date().getHours();

if(hour < 12){
    console.log("Good Morning");
}
else if(hour < 18){
    console.log("Good Afternoon");
}
else{
    console.log("Good Evening");
}