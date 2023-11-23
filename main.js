import "./style.css";

import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import focus from '@alpinejs/focus'

Alpine.plugin(intersect);
Alpine.plugin(focus);
window.alpine = Alpine;


import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import slide1 from './src/assets/img/temp/caricature.jpg';
import slide2 from './src/assets/img/temp/article-featured.jpg';


import gal1 from './src/assets/img/temp/gallery/269-768x432.jpg';
import gal2 from './src/assets/img/temp/gallery/402-768x432.jpg';
import gal3 from './src/assets/img/temp/gallery/756-768x432.jpg';
import gal4 from './src/assets/img/temp/gallery/767-768x432.jpg';




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

Alpine.data("caricatures_page", () =>({

  lightbox: false, 
  imgModalSrc : '', 
  imgModalAlt : '', 
  imgModalDesc : '',

}))

Alpine.data("gallery", () =>({
  slides: [
    { 'id': 1, 'title': 'Corona Kandinsky vienā vai divās rindās', 'author': 'Ernests Kļaviņš', pic: gal1 },
    { 'id': 2, 'title': 'Manai valstij vajag cilvēkus ar Eiropas zināšanām', 'author': 'Ernests Kļaviņš', pic: gal2 },
    { 'id': 3, 'title': 'Manai valstij vajag cilvēkus ar Eiropas zināšanām', 'author': 'Ernests Kļaviņš', pic: gal3 },
    { 'id': 4, 'title': 'Manai valstij vajag cilvēkus ar Eiropas zināšanām', 'author': 'Ernests Kļaviņš', pic: gal4 },
    ],
  activeSlide: 1  ,
  lightbox: false, 
  imgModalSrc : '', 
  imgModalAlt : '', 
  imgModalDesc : '',
  gotoPrev(){
    this.activeSlide = this.activeSlide === 1 ? this.slides.length : this.activeSlide - 1;
  },
  gotoNext() {
    this.activeSlide = this.activeSlide === this.slides.length ? 1 : this.activeSlide + 1
  }
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

  showLightBox: false,
  showMenu: false,
  showSubmenu: false,
  isLoggedIn: false,

});

Alpine.start();


var username = 'JanisSalins';
var application_password = 'rrJf 6Y9s 0meK Tq7A htqZ ajyu';
    

let fetchHomePosts = async () =>
{
    return await new Promise((resolve, reject) =>
    {
      fetch("https://ir-wp.test/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query getHomePosts {
            posts {
              nodes {
                content
                author {
                  node {
                    id
                    email
                    lastName
                    firstName
                  }
                }
                title
              }
            }
          }`
        })
    })
    .then(response => response.json())
    .then(data => {
    console.log("promise?", data);
  }); 
});
}

function getPosts(json)
{    
    let faqList = [];
    let detail, summary;

    json.table.rows.forEach((row, i) =>
    {
        if (i == 0) return; // The first row is the header        

        try { detail = row.c[0].f ? row.c[0].f : row.c[0].v }
        catch(e){ detail = '' }

        try { summary = row.c[1].f ? row.c[1].f : row.c[1].v }
        catch(e){ summary = '' }

        faqList.push([detail, summary]);
    });

    return faqList;
}

fetchHomePosts();
