let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav");

menu.addEventListener("click",function(){

    nav.classList.toggle("active");
    menu.classList.toggle("close");

    
})