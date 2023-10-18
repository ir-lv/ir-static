


## IR - Static tech stack

- ⚡️ [Tailwind CSS](http://tailwindcss.com) - Elements, Components, Pages, layout, styling,
- ⚡️   [Vite](https://github.com/vitejs/vite) - Static files generation, bundling, 
- ⚡️  [npm](https://www.npmjs.com), 
- ⚡️  [Alpine JS](http://alpinejs.dev) - UI interactivity, UI state, etc.
- ⚡️  [Handlebars](https://handlebarsjs.com) - HTML file templating {{}}
- ⚡️  [Prettier](https://prettier.io) - code formatter / linter

- ⚡️  [Prettier For Tailwind CSS](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) - class formatter for Tailwind CSS

- ⚡️  [GitHub Pages](https://www.npmjs.com/package/gh-pages) - Deploy static pages to Github Pages


## Installation

Clone repository, in root directory run 'npm install' command

```bash
cd ir-static

npm install
```

## Development

- Run live dev server - ```npm run dev```

- Build pages and components - ```npm run build```

- Deploy to github static page repo - ```npm run deploy```

- Creating new page:
- Create in root directory new html page
- add new page in vite.config.js file:

```
rollupOptions: {
      input: {
        example: resolve(__dirname, "example.html"),
        ...
```

## Templating

HTML files can be imported into another html files using vite - npm vite-plugin-handlebars plugin

[vite-plugin-handlebars plugin](https://www.npmjs.com/package/vite-plugin-handlebars)

- Usage: Create html file anywhere in ./src folder (eg. my-component.html), then import it in any .html file:
...

{{>my-component}}

...

This file will be updated..