

let menuIcon = document.querySelector('#menu-icon');
let menuX = document.getElementById('menu-x');
let header =  document.querySelector('header');
let scroll = document.getElementById('scroll-top');
let sections = document.querySelectorAll('section');
let navbar = document.querySelector('.navbar')


















































header.classList.toggle('sticky' , window.scrollY > 100);


























menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
   
}


window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


scroll.onclick = () =>{
   window.scrollTo({
    top:0,
    behavior:"smooth"
   })

}





ScrollReveal({
    reset : true,
    distance : '80px',
    duration : 2000,
    delay : 200
});



ScrollReveal().reveal('.home-content1 , .heading' , { origin : 'top' });
ScrollReveal().reveal('.home-content2 , .services-container , .portfolio-container , .contact form ' , { origin : 'bottom' });



















window.onscroll = () => {
    sections.forEach(sec => {
       let top = window.scrollY;
       let offset = sec.offsetTop - 150;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');

       if( top >= offset && top < offset + height ){
        navLinks.forEach(links =>{
         links.classList.remove('active');
         document.querySelector('header nav a[href *= ' + id + ']').classList.add('active');
        })
       }
       
      
    })
}