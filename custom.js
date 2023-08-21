// toggle icon navber
let menuIcon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navber.classList.toggle('active');
}

// scroll section active links 

let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classlist.add('active');

            });

        };
        
    });

    // sticky navber

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    // remove toggle icon and nabar when click navbar

    menuIcon.classList.remove('bx-x');
    navber.classList.remove('active');


}; 

// scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration:2000
    delay:200
 });

 ScrollReveal().reveal('.home-content, .heading', {origin:top });
//  ScrollReveal().reveal('.home-content, .heading', {origin:bottom });