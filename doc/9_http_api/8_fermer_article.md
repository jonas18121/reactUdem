# Fermer un article

Pour pouvoir `fermer la modale de l'article qui a été sélectionner`, il va falloir `penser en react`.

Dans les autres langage, on aurait tendence a mettre la fonction pour le fermer dans le composant PostModale.

Mais `en react la fonction pour le fermer devra être a l'endroit ou on rend notre composant PostModale pour l'afficher`.

Ici, on le rend dans le `composant Blog`. 

Donc c'est dans le composant Blog que l'on va creer la fonction pour fermer la modale de l'article qui a été sélectionner

Dans `Blog.js`

- On crée une propriété toggle avec une valeur par défault sur false `toggle: false`

- Dans le `this.state()` qui est dans la méthode `selectId`, on va mettre la propriété toggle a true, pour dire qu'on veut afficher une modale dès qu'on click sur un article

- On cree une méthode nommé toggleModale(), pour remettre la propriété toggle a false, dès qu'on click sur le bouton fermer de la modale, pour dire qu'on veut fermer la modale

- Dans le composant PostModale on va lui passer une propriété `cacheModale={this.toggleModale}` qui va nous permettre d'appelé toggleModale

- Toujours dans le composant PostModale on va lui passer une propriété `toggle={this.state.toggle}` pour qu'il connaisse l'état du toggle. si c'est true ou false

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
            selectPostId : null,
            toggle: false
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

        /**
        * S'active au clique sur l' article
        */
        selectId = id => {
            this.setState({ 
                selectPostId: id,
                toggle: true
            });
            console.log(this.state);
        }

        /**
        * S'active au clique sur le boutton fermer du modale
        */
        toggleModale = () => {
            this.setState({ toggle: false })
        }

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

                    <PostModale 
                        id={this.state.selectPostId} 
                        cacheModale={this.toggleModale}
                        toggle={this.state.toggle}
                    />

                    <section className="Posts">
                        {post}
                    </section>

                </div>
            );
        }
    }

    export default Blog;


Dans `PostModale.js`

- Dans le bouton fermer, on lui passe une propriété `onClick={this.props.cacheModale}`, pour qu'il appel la propriété `cacheModale` de `Blog.js`, lorsqu'on click sur ce bouton fermer

- Dans notre condition ternaire `this.state.loadedPost && this.props.toggle ? ... : null` , on ajoute `this.props.toggle` pour dire qu'on veut afficher la modale seulement si l'article est bien charger `this.state.loadedPost` et que le toggle est sur true `this.props.toggle`

Dans `PostModale.js`

    import React, { Component } from 'react';
    import axios from 'axios';
    import './PostModale.css';

    class PostModale extends Component {

        state = {
            loadedPost: null
        }

        componentDidUpdate()
        {
            if(this.props.id){

                if (!this.state.loadedPost || (this.state.loadedPost && (this.props.id !== this.state.loadedPost.id) ) ) {
                    
                    axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                        .then(
                            response => {
                                this.setState({
                                    loadedPost : response.data
                                });
                            }
                        )
                    ;
                }
            }
        }

        render () {

            return (

                this.state.loadedPost && this.props.toggle ?
                
                    <div className="PostComplet">
                        
                        <h1>{this.state.loadedPost.title}</h1>
                        <p>{this.state.loadedPost.body}</p>
                
                        <button 
                            className="btn btn-danger my-3 btnPost"
                            onClick={this.props.cacheModale}
                        >Fermer</button>
                    
                    </div>
                : 
                    null
            )
        }
    }

    export default PostModale;
