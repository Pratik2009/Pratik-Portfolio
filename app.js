
// Select both hamburger and close elements
const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");
const nav = document.querySelector("nav");

// Toggle menu open/close state
function toggleMenu() {
    nav.classList.toggle("active");

    // Toggle between hamburger and close icons
    if (nav.classList.contains("active")) {
        hamburger.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        hamburger.style.display = "block";
        closeIcon.style.display = "none";
    }
}




// Add event listeners for both hamburger and close icons
hamburger.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);


const li = document.querySelector("li a")

Array.prototype.forEach.call(li,  (a) => {
    a.addEventListener("click",()=>{
        hamburger.remove("active");
        closeIcon.remove("active");


    })
});

