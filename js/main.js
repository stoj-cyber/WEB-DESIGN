// Hero swiper slider
var swiper = new Swiper('.swiper-container', {
    effect:'slide',
    speed: 3000,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  //  autoplay: {
  //        delay: 3000,
  //    },
  }); 

  //mobile menu
  let mobileMenuIcon = document.querySelector("header .fa-bars")
  let menu = document.querySelector("header .menu")
  mobileMenuIcon.addEventListener("click",function(){
      menu.classList.toggle("open")
  });