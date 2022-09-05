const menu = document.querySelector('#menu');
const menulinks = document.querySelector('.nav-active');

// Drop down menu bar that forms an x when activated
const Menu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};

menu.addEventListener('click', Menu)

// Responsive nav bar or scroll
window.addEventListener("scroll", function(){
    var navBar = document.querySelector('.nav');
    navBar.classList.toggle("sticky", window.scrollY > 0);
})






// Slider
const cator = document.querySelectorAll('.cator');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const img = document.querySelector('.bg-img');

const r = document.querySelector(':root');
const rs = getComputedStyle(r);

let id = 0;

const images = [
    './images/pray-g9f06144bd_1920.jpg',
    './images/close-up-1721060_1920.jpg',
    './images/tea-art-gf0e372e98_1920.jpg'
]


function slider(i) {
    img.src = images[i]; 
    for(let i = 0; i < cator.length; i++) {
        cator[i].classList.remove('active');
    }
    cator[i].classList.add('active');
}

for(let i = 0; i < cator.length; i++) {
    cator[i].addEventListener('click', () => {
        slider(i);
        id = i;
        stopAutoSlide()
    });
}

prev.addEventListener('click', () => {
    id--;
    if(id < 0) {
        id = cator.length - 1;
    }

    slider(id);
    stopAutoSlide();
});

next.addEventListener('click', () =>{
    nextSlide();
    stopAutoSlide();
});

function nextSlide() {
    id++;
    if (id > cator.length - 1) {
        id = 0;
    }
    slider(id);
}

let autoSlide = setInterval(nextSlide, 5000);

function stopAutoSlide() {
    clearInterval(autoSlide);

    autoSlide = setInterval(nextSlide, 5000);
}


// Shop and cart
var noti = document.querySelector('.cart');
var select = document.querySelector('.select');
var button = document.getElementsByName('.buy-button');

for(but of button) {
    but.addEventListener('click', (e)=>{
        var add = Number(noti.getAttribute('data-count')|| 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero');
    });
};
