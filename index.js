
var menuSlide= document.querySelector(".menuslide");
// menuSlide.style.display= "none"
var closebtn= document.querySelector(".close-btn");
var menuBtn= document.getElementById("themenu");
var overlay= document.querySelector(".blur")
const is_active= "is--active"
var toggleNav= ()=>{
    menuSlide.classList.toggle(is_active)
    overlay.classList.toggle(is_active)
}
menuBtn.addEventListener("click",toggleNav)
closebtn.addEventListener("click",toggleNav)
overlay.addEventListener("click",toggleNav)



// closebtn.addEventListener("click",()=>{
//     // console.log("hi")
//     if(menuSlide.style.display == ("") ){
//         menuSlide.style.display= "none"


//     }
// })


// menuSlide.style.display= "none";
// menuBtn.addEventListener("click",()=>{
//     if(menuSlide.style.display == ("none") ){
//         menuSlide.style.display= "";


//     }
// })





