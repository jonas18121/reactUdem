# Réduire les articles et rajouter une propriété


Dans `Blog.js`
 
Pour réduire le nombre d' articles

- On utilise `slice` pour récupéré que 4 articles par exemple `const articles = reponse.data.slice(0,4);`
- Puis on met la constante `articles` dans le `state` exemple `this.setState({ posts : articles});`

Pour rajouter une propriété

- On va mappé les 4 articles qu'on a reçu de notre constante articles `const postAuteur = articles.map()` 

- `articles.map()`, on va return les 4 articles ainsi que leurs propriété déjà existant et on va juste rajouter une propriété `auteur`

- On utilise `...` devant `post` afin de pouvoir rajouter la propriété `auteur` correctement, sinon ça va faire une truc bizarre

- Puis on met la constante `postAuteur` dans le `state` exemple `this.setState({ posts : postAuteur});`

- on va faire passer la propriété `auteur en props à notre composant Post` `<Post key={post.id} auteur={post.auteur} titre={post.title} />`

Dans `Blog.js`

    import React, { Component } from 'react'
    import NvPost from './NvPost/NvPost'
    import PostModale from './PostModale/PostModale'
    import './Blog.css'
    import axios from 'axios'
    import Post from './Post/Post'

    class Blog extends Component {

        state = {
            posts : []
        }

        componentDidMount(){

            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(reponse => {
                    // console.log(reponse); 

                    const articles = reponse.data.slice(0,4);

                    const postAuteur = articles.map(post => {
                        return {
                            ...post,
                            auteur: 'Jonas'
                        }
                    });

                    console.log(postAuteur); 

                    this.setState({ posts : postAuteur});
                })
            ;  
        }

        render () {

            const post = this.state.posts.map(post => {
                return <Post key={post.id} auteur={post.auteur} titre={post.title} />
            })

            return (
                <div>
                    <section>
                    <NvPost />
                    </section>
                    <h2 className="text-center my-5">Choisissez un post ...</h2>
                    <PostModale />
                    <section className="Posts">
                        {post}
                    </section>

                </div>
            );
        }
    }

    export default Blog;

Dans `Post.js`

- On va utiliser la props auteur `{props.auteur}`

Dans `Post.js`

    import React from 'react'

    import './Post.css'

    const post = (props) => (

        <article className="Post">
            <h1>{props.titre}</h1>

            <div>
                <div className="Auteur">{props.auteur}</div>
            </div>

        </article>
    );

    export default post;