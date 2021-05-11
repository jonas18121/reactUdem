# Eviter la boucle infinie 

Dans `PostModale.js` 

Lorsqu'on va recevoir des données de l'api `https://jsonplaceholder.typicode.com/posts/`, 
componentDidUpdate() va mettre à jours le contenu qui est dans le render().

Le contenu qui est dans le render(), une fois qu'il est mis à jours va faire appel à componentDidUpdate(). 

puis componentDidUpdate() va mettre à jours le contenu qui est dans le render().

Le contenu qui est dans le render(), une fois qu'il est mis à jours va faire appel à componentDidUpdate().

puis componentDidUpdate() va mettre a jours le contenu qui est dans le render().

ainsi de suite , ça va faire une boucle infinie.

Pour éviter la boucle infinie on va mettre notre `axios.get()` dans une autre condition.

- if (!this.state.loadedPost || (this.state.loadedPost && (this.state.loadedPost.id !== this.props.id) ) )

- on vérifie si le `!this.state.loadedPost` == `false`, on va mettre à jour le contenu qui est dans le render(),
Ou, si `this.state.loadedPost` == `true` et que l'`id de this.state.loadedPost` est différent de l'`id de this.props.id`,
on va mettre à jour le contenu qui est dans le render()

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
