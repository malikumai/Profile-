let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('.open');
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo',{delay:200, origin: 'left'});
sr.reveal('.navbar',{delay:400, origin: 'top'});
sr.reveal('.menu-btn',{delay:520, origin: 'right'});



sr.reveal('.home-text span',{delay:600, origin: 'right'});
sr.reveal('.home-text h1',{delay:680, origin: 'bottom'});
sr.reveal('.home-text p',{delay:700, origin: 'top'});
sr.reveal('.main-btn',{delay:700, origin: 'bottom'});
sr.reveal('.share',{delay:850, origin: 'right'});
sr.reveal('.home-img',{delay:1000, origin: 'right'});


// // Access the menu icon and navbar elements
// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// // Attach a click event listener to the menu icon
// menu.onclick = () => {
//     // Toggle the 'bx-x' class on the menu icon
//     menu.classList.toggle('bx-x');
    
//     // Toggle the 'open' class on the navbar
//     navbar.classList.toggle('open');
// };