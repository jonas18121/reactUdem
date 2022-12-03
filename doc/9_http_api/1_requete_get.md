# La requête "GET"

https://fr.reactjs.org/docs/faq-ajax.html

Pour faire une requête avec le `verbe HTTP GET avec React`.
On peut utiliser n’importe quelle bibliothèque AJAX de notre choix avec React. 
Parmi les plus populaires, on trouve `Axios` (https://github.com/axios/axios), `jQuery AJAX` (https://api.jquery.com/jQuery.ajax/), et le standard `window.fetch` (https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch) intégré au navigateur.

Ici on va utiliser `Axios`
Axios est un client HTTP léger basé sur le service $http dans Angular.js v1.x et est similaire à l’API native JavaScript Fetch.
Axios est basé sur Promise, ce qui nous permet de profiter des avantages d’`async` de JavaScript et `await` pour un code asynchrone plus lisible.

On exécute cette commande pour installer `Axios`.

    > npm install axios

On vaobtenir vos données via des appels AJAX dans la méthode de cycle de vie `componentDidMount`. 
De cette façon, nous pourrons y utiliser `setState` pour mettre à jour notre composant lorsque les données seront récupérées.


Dans `Blog.js` avec axios

- on import axios
- on utilise la fonction get de Axios dans componentDidMount()
- on utilise l'API Jsonplaceholder https://jsonplaceholder.typicode.com/posts pour récupéré des posts
- site de Jsonplaceholder https://jsonplaceholder.typicode.com/

Dans `Blog.js` avec axios

    import React, { Component } from 'react'
    import NvPost from './NvPost/NvPost'
    import PostModale from './PostModale/PostModale'
    import './Blog.css'
    import axios from 'axios'

    class Blog extends Component {

        componentDidMount(){

            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(reponse => {
                    console.log(reponse);
                })
            ;
                    
        }

        render () {

            return (
                <div>
                    <section>
                    <NvPost />
                    </section>
                    <h2 className="text-center my-5">Choisissez un post ...</h2>
                    <PostModale />
                    <section className="Posts">
                    </section>

                </div>
            );
        }
    }

    export default Blog;


Dans `Blog.js` avec fetch

- on utilise fetch dans componentDidMount()
- on utilise l'API Jsonplaceholder https://jsonplaceholder.typicode.com/posts pour récupéré des posts
- site de Jsonplaceholder https://jsonplaceholder.typicode.com/

Dans `Blog.js` avec fetch

    import React, { Component } from 'react'
    import NvPost from './NvPost/NvPost'
    import PostModale from './PostModale/PostModale'
    import './Blog.css'

    class Blog extends Component {

        componentDidMount(){

            fetch('https://jsonplaceholder.typicode.com/posts')
                .then( response => response.json())
                .then(json => console.log(json))
            ;    
        }

        render () {

            return (
                <div>
                    <section>
                    <NvPost />
                    </section>
                    <h2 className="text-center my-5">Choisissez un post ...</h2>
                    <PostModale />
                    <section className="Posts">
                    </section>

                </div>
            );
        }
    }

    export default Blog;