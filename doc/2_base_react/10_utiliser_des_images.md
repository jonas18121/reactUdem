# Utiliser des images dans reactJS

## Utiliser des images qui sont sur internet

On va sur ce site pour prendre des images gratuit : https://unsplash.com

### Dans Item.js

- Importer `Item.js` dans `App.js`

- `<img src={url_pris_sur_internet} alt="" />`, Dans `src` de la balise `<img />`, on met l'url de l'image qu'on pris sur internet dans des accolades `{ }` pour ne pas avoir d'erreur lors de la compilation

Dans `Item.js`

    import React from 'react'

    function Item() {
        return (
            <div>
                <h1>Hello depuis Item</h1>

                <img src={ "https://images.unsplash.com/photo-1624614014891-0ac647fc1f65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" } alt="" />
            </div>
        )
    }

    export default Item;


## Utiliser des images qui sont dans notre projet

ce qui est RECOMMANDER, c'est de mettre nos images dans un dossier nommé `assets` qui ce situe dans le dossier `src` de notre projet.

Lorsqu'on met nos images dans le dossier `src`, les images seront compiler avec webpack et ils auront un hash `crevase.6a9c4eff.jpg` qui va aider lors de la mise en cache des images, les seront nimifier donc ça sera plus performant de manière générale.

Faites inspecter dans votre navigateur, vous ferrez ça:  `<img src="/static/media/crevase.6a9c4eff.jpg" />`

    my_projet/

        ...

        src/
            assets/
                my_img.jpg

            Component/

            App.js

            ...

### Dans Item.js

- On importe notre image, qu'on a mis dans le dossier `assets`

- `<img src={notre_img_importer} alt="" />`, Dans `src` de la balise `<img />`, on met l'url de l'image qu'on pris depuis le dossier `assets` dans des accolades `{ }` 

Dans `Item.js`

    import React from 'react'
    import crevase from '../../assets/crevase.jpg'

    function Item() {
        return (
            <div>
                <h1>Hello depuis Item</h1>

                <img src={crevase} alt="" />
            </div>
        )
    }

    export default Item;


## Utiliser des images qui sont dans notre projet depuis le css


### Dans Item.css

- L'élément qui aura la classe css nommé `titre-item`, aura notre image en arrière plan

Dans `Item.css` 

    .titre-item {
        font-size: 50px;
        background-image: url('../../assets/crevase.jpg');
    }


### Dans Item.js

- On importe notre css. `import './Item.css';`

- `className="titre-item"` on utilise une classe css pour utiliser le css dans la balise `h1`

Dans `Item.js`

    import React from 'react'
    import crevase from '../../assets/crevase.jpg'

    function Item() {
        return (
            <div>
                <h1 className="titre-item">Hello depuis Item</h1>

                <img src={crevase} alt="" />
            </div>
        )
    }

    export default Item;

## Utiliser des images qui sont dans notre projet de manière dynamique

### PREMIEREMENT

Déjà dans `public/index.html` on utilise `%PUBLIC_URL%` avant de mettre l'image. 

Exemple: `<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />`

`%PUBLIC_URL%` : va s'adapter a l'endroit ou le projet est situé. 

par exemple si notre projet est sur un serveur et qu'on utilise le domaine `https://my_projet.com` 

`%PUBLIC_URL%` représentera `https://my_projet.com`

### DEUXIEMEMENT

### Dans Item.js

- On a mit `crevase.jpg` dans le dossier `public`

- < img src={process.env.PUBLIC_URL + `/crevase.jp${myLetter}`} alt="" /> , on cree une constante `const myLetter = 'g';` qu'on peut utiliser dans une partie de nom de l'image, ce qui le rend dynamique

- On peut faire depuis le dossier `public` mais pas depuis dossier `src`

- `process.env.PUBLIC_URL` est comme `%PUBLIC_URL%` qui est dans `index.html`

- `process.env.PUBLIC_URL` : va s'adapter a l'endroit ou le projet est situé.

par exemple si notre projet est sur un serveur et qu'on utilise le domaine `https://my_projet.com` 

`process.env.PUBLIC_URL` représentera `https://my_projet.com`


Dans `Item.js`

    import React from 'react'
    import './Item.css';

    function Item() {

        const myLetter = 'g';

        return (
            <div>
                <h1 className="titre-item">Hello depuis Item</h1>

                <img src={process.env.PUBLIC_URL + `/crevase.jp${myLetter}`} alt="" />
            </div>
        )
    }

    export default Item;


## Utiliser des SVG

on va sur le site Flaticon pour prendre des images SVG : https://www.flaticon.com/fr/icones

### Dans Item.js

- On importe notre image svg, qu'on a mis dans le dossier `assets`

- `<img src={notre_img_svg_importer} alt="" />`, Dans `src` de la balise `<img />`, on met l'import de l'image svg qu'on pris depuis le dossier `assets` dans des accolades `{ }` 

- On peut aussi mettre l'image svg en tant que composant en utilisant `ReactComponent` 

    `import { ReactComponent as Cat } from '../../assets/cat.svg';`

- et on l'utilise `<Cat />`

Dans `Item.js`

    import React from 'react';
    import './Item.css';
    import happy from '../../assets/happy.svg';
    import { ReactComponent as Cat } from '../../assets/cat.svg';

    function Item() {

        const myLetter = 'g';

        return (
            <div>
                <h1 className="titre-item">Hello depuis Item</h1>

                <img src={`/crevase.jp${myLetter}`} alt="" />

                <img src={happy} alt="" />

                <Cat />
            </div>
        )
    }

    export default Item;




