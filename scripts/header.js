var home_link = document.getElementById('home-link')
var about_link = document.getElementById('about-link')
var images_link = document.getElementById('images-link')
var services_link = document.getElementById('services-link')

var home = document.getElementById('home')
var about = document.getElementById('about')
var images = document.getElementById('images')
var services = document.getElementById('services')
var logo = document.getElementById('logo')

var header = document.getElementById('nav-header')
var sticky = header.offsetTop;

logo.onclick = function() {
  resetAttribute();
}

home_link.onclick = function() {
  resetAttribute();
  home.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
  home_link.setAttribute("class", "active")
}
about_link.onclick = function() {
  resetAttribute();
  about.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
  about_link.setAttribute("class", "active")
}
images_link.onclick = function() {
  resetAttribute();
  images.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
  images_link.setAttribute("class", "active")
}
services_link.onclick = function() {
  resetAttribute();
  services.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
  services_link.setAttribute("class", "active")
}

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function resetAttribute() {
    home_link.removeAttribute("class")
    about_link.removeAttribute("class")
    images_link.removeAttribute("class")
    services_link.removeAttribute("class")
}

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
