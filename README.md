# DBR LOGO

Elemento padrão:
```html
<span class="svg-dbr" data-icon-name="logodbr"></span>
```

### Dependências

#### Snap.svg

Inclua o arquivo [Snap.svg](https://github.com/adobe-webplatform/Snap.svg) do diretório `src/scripts/snap.svg-min.js` ou instale pelo bower:

```
bower install snap.svg
```

#### SVG icons
Inclua o arquivo `src/scripts/svgicons.js` ou baixe ele no repositório oficial do [github](https://github.com/codrops/AnimatedSVGIcons/blob/master/js/svgicons.js).

#### Animação
Para adicionar a transição do logo inclua o `src/scripts/dbr-logo.js`.

> basic style `src/styles/style.css`

Iniciando a animação:

```html
<script>
  var wrapper = 'wrapperId'; // Container do svg.
  var mouseEvent = 'click'; // evento do mouse, 'mouseover' ou 'click'.
  var directory = '../path/logo.svg'; // Pasta de destino do svg.

  createDbrLogo(wrapper, mouseEvent, directory);
</script>
```

### demo
Para ver o demo execute:
```
npm run dev
```
