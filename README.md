# DBR LOGO (SVG ANIMATION)

Default element wrapper ```<span class="svg-dbr" data-icon-name="logodbr"></span>```

- data-icon-name need be equal Object name in ```main.js```
- Dont work in static files just in server or online, run ```nodemon app.js``` for start server
- Initial style in ```style.css```
- Init svg: ```createDbrLogo('your wrapper', 'your mouse event', 'your directory url svg');```
- Valid mouse event: 'mouseover' or 'click'

#### Dependencies

- snap svg (```public/vendor/snap.svg-min.js```)
- svg icons (```public/vendor/svgicons.js```)
- basic style (```public/styles/style.css```)
