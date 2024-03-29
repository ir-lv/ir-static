import "./style.css";

import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import focus from '@alpinejs/focus'

Alpine.plugin(intersect);
Alpine.plugin(focus);
window.alpine = Alpine;


import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import slide1 from './src/assets/img/temp/home/elksnins.png';
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

// HOME PAGE DATA
Alpine.data("home", () => ({

  posts: [],

  async getPosts() {
    return await new Promise((resolve, reject) =>
    {
      fetch("https://irdev.devio.lv/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query HomePosts {
            posts(first: 20) {
              edges {
                node {
                  id
                  title
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }`,
        })
    })
    .then(response => response.json())
    .then(res => {
      this.posts = res.data.posts.edges;
      console.log("posts loaded", this.posts);
  }); 
});

},

init() {
  this.getPosts();
}
}));


Alpine.data("category_page", () => ({

  posts: [],
  pos: null,

  async getPosts() {
    return await new Promise((resolve, reject) =>
    {
      fetch("https://irdev.devio.lv/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query GetCategoryPosts {
            posts(where: {categoryName: "intervija"}) {
              edges {
                node {
                  id
                  title
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  slug
                  author {
                    node {
                      name
                    }
                  }
                  categories {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
          }`,
        })
    })
    .then(response => response.json())
    .then(res => {
      this.posts = res.data.posts.edges;
      console.log("category posts loaded", this.posts);
  }); 
});

},

init() {
  this.getPosts();
}
}));

// ARTICLE DATA
Alpine.data("article", () => ({

  dimToolbar: false,
  scrollPos: {},
  post: null,
  id: '0', 
  wp: [],
  async retrievePost() {
    //this.wp[0] = await (await fetch('https://baravika.com/wp-json/wp/v2/posts/'+this.id)).json();
    // log out all the posts to the console
    //console.log(this.wp[0]);

  let id = this.id;
  let query = `query GetPost($id: ID!) {
    post(id: $id, idType: SLUG) {
      id
      title
      content
      featuredImage {
        node {
          mediaDetails {
            file
          }
          caption
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }`

  fetch("https://irdev.devio.lv/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { id },
    }),
  })
  .then(response => response.json())
  .then(res => {
    console.log("result", res);
    this.wp[0] = this.post = res.data.post;
    console.log("promise!!@!", res.data.post);
})

},

init() {
  let params = new URLSearchParams(window.location.search).get('slug');
  this.id = params != null ? params : 'empty';
  console.log('slug', this.id);
  this.retrievePost();
}
}));

Alpine.data("caricatures", () =>({
  slides: [
    { 'id': 1, 'title': 'Vai viņi satiksies?', 'author': 'Ernests Kļaviņš', pic: slide1 },
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

Alpine.store("header", {
  isScreenDesktop() {
    let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    return width >= 1024;
  },

  showMenu: false,
  showSubmenu: false,
  showSearch: false,
  isLoggedIn: false,
});

Alpine.store("content", {

  isScreenDesktop() {
    let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    return width > 1024;
  },

  showLightBox: false,
  showMenu: false,
  showSubmenu: false,
  isLoggedIn: false,

});

Alpine.start();
