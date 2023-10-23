import "./style.css";
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";

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

var username = 'JanisSalins';
var application_password = 'rrJf 6Y9s 0meK Tq7A htqZ ajyu';
    
const res = await fetch("https://ir.lv/wp-json/wp/v2/posts", {
    method: "POST",
    headers: {
        "Authorization": "Basic " + btoa(username + ':' + application_password),
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        "title": "Post using REST API",
        "content": "Post content using REST API",
        "status": "publish"
    }),
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
