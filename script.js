// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// sticky navbar
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// Remove toggle icon and navbar when click navbar link (scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

// Theme Customizer -
let themeButtons = document.querySelectorAll('.theme-buttons');
themeButtons.forEach(color => {
    color.addEventListener('click', () => {
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color', dataColor)
    })
})

let gear = document.querySelector('.gear');
let dropdown = document.querySelector('.dropdown');

gear.addEventListener('click', () => {
    let rotation = gear.style.transform;

    if (rotation === '') {
        gear.style.transform = 'rotate(150deg)';
        dropdown.style.opacity = '1';
        dropdown.style.transition = 'opacity 0.5s ease-in-out';
    } else {
        gear.style.transform = '';
        dropdown.style.opacity = '0';
        dropdown.style.transition = 'opacity 0.5s ease-in-out';
    }
});