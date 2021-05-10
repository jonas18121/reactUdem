# Afficher un article


Dans `PostModale.js`

- On crèe une propriété `loadedPost` par défaut a `null` dans le `state`

- `this.setState({loadedPost : response.data});` Dès qu'on clique sur un article, on met ses données dans le state

- dans le `return()` qui est dans le `render()`, on met `this.state.loadedPost` pour avoir les données de l'article avant de les affichées

- {this.state.loadedPost.title}, on affiche le titre

- {this.state.loadedPost.body}, on affiche le contenu

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

        render () {

            return (

                this.state.loadedPost ?
                
                    <div className="PostComplet">
                        
                        <h1>{this.state.loadedPost.title}</h1>
                        <p>{this.state.loadedPost.body}</p>
                
                        <button className="btn btn-danger my-3 btnPost">Fermer</button>
                    
                    </div>
                : 
                    null
            )
        }
    }

    export default PostModale;
