const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav__links");
  const navLinks = document.querySelectorAll(".nav__links li");

 // toggle nav 
  burger.addEventListener("click", () => {
     nav.classList.toggle("nav-active");

    //animate links 
    navLinks.forEach((link, index) => {
       if(link.style.animation) {
         link.style.animation = '';
       }else {
         link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.5}s`;
       }
    });
    // burger Animation
    burger.classList.toggle("toggle");
    
  });
  
}
navSlide()

// nav active
const navbar = document.querySelector(".nav__links").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element => {
  element.addEventListener("click", function(){
    navbar.forEach(nav =>nav.classList.remove("active"))

    this.classList.add("active");
  })
})

// sctroll smooth
const scroll = new SmoothScroll('.nav__links a[href*="#"], p a[href*="#"]',  {
  speed:800
});
// set  date 
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear()













