let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
   
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }
};

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }
};






let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');

}
















var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});