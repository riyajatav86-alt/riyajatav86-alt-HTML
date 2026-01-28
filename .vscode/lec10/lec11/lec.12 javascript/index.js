console.log("Hello, Riya.!");

let btn = document.querySelector("button");
let body = document.querySelector("body");
isdark = true;
btn.addEventListener("click", function() {
    //console.log("Button clicked");//
   // body.style.backgroundColor = "red";//
   if (isdark) {
    body.style.backgroundColor = "blue";
   } else {
    body.style.backgroundColor = "black";
    
   }
   isdark = !isdark;
})