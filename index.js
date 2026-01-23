console.log("Hello, Riya.!");

let btn = document.querySelector("button");
let body = document.querySelector("body");

btn.addEventListener("click", function() {
    //console.log("Button clicked");//
    body.style.backgroundColor = "red";
})