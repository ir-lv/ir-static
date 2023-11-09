import "./style.css";

import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";

Alpine.plugin(intersect);

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import slide1 from './src/assets/img/temp/caricature.jpg';
import slide2 from './src/assets/img/temp/article-featured.jpg';


// init Swiper:
const swiper = new Swiper('.swiper-1', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 4,
    }
  }
})

const swiper1 = new Swiper('.swiper-2', {
  loop: true,
  slidesPerView: 1,     //add
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  breakpoints: {
    640: {
      slidesPerView: 4,
    }
  }
})


window.alpine = Alpine;

Alpine.magic('scrollAmount', () => {
  const scrollPercent = 
    (window.scrollY / (document.getElementById("article").offsetHeight + 500 - window.innerHeight)) * 100

  return {
    scrollPx: window.scrollY,
    scrollPercent: scrollPercent,
    atStart: scrollPercent == 0,
    atEnd: scrollPercent == 100,
  }
})

Alpine.data("article", () => ({
  dimToolbar: false,
  scrollPos: {}
}));

Alpine.data("caricatures", () =>({
  slides: [
    { 'id': 1, 'title': 'Corona Kandinsky vienā vai divās rindās', 'author': 'Ernests Kļaviņš', pic: slide1 },
    { 'id': 2, 'title': 'Manai valstij vajag cilvēkus ar Eiropas zināšanām', 'author': 'Ernests Kļaviņš', pic: slide2 }
    ],
  activeSlide: 1
}))

Alpine.store("header", {
  isScreenDesktop() {
    let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    return width > 640;
  },

  showMenu: false,
  showSubmenu: false,
  showSearch: false,
  isLoggedIn: false,
});

Alpine.store("content", {
  isScreenDesktop() {
    let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    return width > 640;
  },

  showMenu: false,
  showSubmenu: false,
  isLoggedIn: false,
});

Alpine.start();


var username = 'JanisSalins';
var application_password = 'rrJf 6Y9s 0meK Tq7A htqZ ajyu';
    
/* const res = await fetch("https://irdev.devio.lv/wp-json/wp/v2/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Basic " + btoa(username + ':' + application_password),
      "Origin": "http://localhost:5173"
    },
    body: JSON.stringify({
        "title": "Post using REST API",
        "content": "Post content using REST API",
        "status": "publish"
    }),
})
.then(response => response.json())
.then(data => {
    console.log("!!!!!", data);
}); */
