import "./style.css";
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


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


Alpine.plugin(intersect);

window.alpine = Alpine;

Alpine.data("article", () => ({
  dimToolbar: false,
}));

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

console.log("????");


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
