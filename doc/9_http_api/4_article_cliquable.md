# Rendre un Article cliquable

pour rendre nos article cliquable

on va aller dans `Post.js`

- On va réagir au clique sur l'article et appelé le `props clicked` `onClick={props.clicked}`

Dans `Post.js`

    import React from 'react'

    import './Post.css'

    const post = (props) => (

        <article className="Post" onClick={props.clicked}>
            <h1>{props.titre}</h1>

            <div>
                <div className="Auteur">{props.auteur}</div>
            </div>

        </article>
    );

    export default post;



    import React, { Component } from 'react'
    import NvPost from './NvPost/NvPost'
    import PostModale from './PostModale/PostModale'
    import './Blog.css'
    import axios from 'axios'
    import Post from './Post/Post'

    class Blog extends Component {

        state = {
            posts : [],
            selectPostId : null
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

                    this.setState({ posts : postAuteur });
                })
            ;  
        }

        selectId = id => this.setState({ selectPostId: id })

        render () {

            const post = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    auteur={post.auteur} 
                    titre={post.title} 
                    clicked ={ () => this.selectId(post.id) }
                />
            })

            return (
                <div>
                    <section>
                    <NvPost />
                    </section>

                    <h2 className="text-center my-5">Choisissez un post ...</h2>

                    <PostModale id={this.state.selectPostId} />

                    <section className="Posts">
                        {post}
                    </section>

                </div>
            );
        }
    }

    export default Blog;

Dans `Blog.js`

- On utilise le composant `<Post>` ici, donc on va créer la propriété `clicked` ici

- La propriété `clicked` va lui mème appelé une fonction fléché qui appelle la méthode `selectId`

- La méthode `selectId` prend en paramètre l'id de l'article et va modifier la propriété `selectPostId` du `state` en lui passant l'id de l'article 

- Dans le composant `<PostModale>`, on va créer une propriété `id` qui prendra la valeur de la propriété `selectPostId` du `state`


Dans `Blog.js`

    import React, { Component } from 'react'
    import NvPost from './NvPost/NvPost'
    import PostModale from './PostModale/PostModale'
    import './Blog.css'
    import axios from 'axios'
    import Post from './Post/Post'

    class Blog extends Component {

        state = {
            posts : [],
            selectPostId : null
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

                    this.setState({ posts : postAuteur });
                })
            ;  
        }

        selectId = id => this.setState({ selectPostId: id })

        render () {

            const post = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    auteur={post.auteur} 
                    titre={post.title} 
                    clicked ={ () => this.selectId(post.id) }
                />
            })

            return (
                <div>
                    <section>
                    <NvPost />
                    </section>

                    <h2 className="text-center my-5">Choisissez un post ...</h2>

                    <PostModale id={this.state.selectPostId} />

                    <section className="Posts">
                        {post}
                    </section>

                </div>
            );
        }
    }

    export default Blog;

Dans `PostModale.js`

- on supprimme ou on met en commentaire le `display: none;` qui est dans `.PostComplet` afin de pouvoir affiche le composant `PostModale` pour pouvoir le manipuler après

Dans `PostModale.js`

    .PostComplet {
        background: rgb(194, 194, 194);
        width: 40%;
        min-width: 400px;
        height: auto;
        margin: 20px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        text-align: center;

        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        /* display: none; */
    }

    .btnPost {
        position: absolute;
        right: 20px;
        top: 0px;
    }


    .PostComplet h1 {
        margin-top: 50px;
    }


Dans `PostModale.js`

- On va faire un rendu conditionnel en ternaire this.props.id ? `<true>` : `<false>`, s'il y a une valeur dans `props.id`, on considère que c'est `<true>` et on affiche la modale, sinon on considère que c'est `<false>` et on n'affiche pas la modale

Dans `PostModale.js`

    import React, { Component } from 'react'

    import './PostModale.css'

    class PostModale extends Component {

        render () {

            return (

                this.props.id ?
                
                    <div className="PostComplet">
                        
                        <h1>Titre</h1>
                        <p>Contenu</p>
                
                        <button className="btn btn-danger my-3 btnPost">Fermer</button>
                    
                    </div>
                : 
                    null

            )
        }
    }

    export default PostModale;
