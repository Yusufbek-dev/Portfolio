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
// set  date 

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear()



// smooth scroll


const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link) {
   link.addEventListener("click", function(e) {
     // prevent default 
     e.preventDefault();
     // navigation to specific spot
     const id = e.currentTarget.getAttribute("href").slice(1);
     const element = document.getElementById(id);
     let position = element.offsetTop;
     window.scrollTo({
       left:0,
       top:position,
     });
    //  linksContainer.stlye.height =0;
   });
});












