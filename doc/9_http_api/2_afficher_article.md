# Afficher les articles

On va afficher nos article avec le composant Post

Dans `Blog.js`

- On importe le composant `Post`

- On ce crée un `state`, avec une propriété `posts` qui sera un tableau vide

- Dans `componentDidMount()`,  on utilise `this.setState({ posts : reponse.data})` , afin de mettre à jours le `tableau posts` qui est dans le `state`, en mettant nos articles qui viennent de l'api dedans

- Dans le `render()`, on va mettre une `constante post` qui recevra, l'un après l'autre chaque article qui provient de `l'api` grace a la méthode `.map()`

- Dans `<section className="Posts">`, on va mettre `{post}` qui représentera tour après tour chaque article qui provient de `l'api`, s'il y a 100 articles qui provient de `l'api`, ça affichera 100 articles différents dans le navigateur

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
                    console.log(reponse);

                    this.setState({ posts : reponse.data});
                })
            ;  
        }

        render () {

            const post = this.state.posts.map(post => {
                return <Post key={post.id} titre={post.title} />
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

- On va passé notre props titre `{props.titre}`, qui provient de `Blog.js`

Dans `Post.js`

import React from 'react'

import './Post.css'

const post = (props) => (

    <article className="Post">
        <h1>{props.titre}</h1>

        <div>
            <div className="Auteur">Auteur</div>
        </div>

    </article>
);

export default post;