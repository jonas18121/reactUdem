# Récupérer le contenu

On va récupérer le contenu de d'un article lorsqu'on clique dessus, 
Pour l'instant on le récupère dans un console.log()

Dans `PostModale.js`

- On importe axios

- On va utiliser le LifeCycle componentDidUpdate() pour faire une mettre a jour à chaque clique sur un article

- componentDidUpdate(), si on a une valeur `int` dans `this.props.id`, on va aller chercher `l'article qui cette identifiant` via cette url `'https://jsonplaceholder.typicode.com/posts/' + this.props.id` puis, on l'affiche dans le console.log()

Dans `PostModale.js`

    import React, { Component } from 'react';
    import axios from 'axios';
    import './PostModale.css';

    class PostModale extends Component {

        componentDidUpdate()
        {
            if(this.props.id){
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(
                        response => {
                            console.log(response);
                        }
                    )
                ;
            }
        }

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
