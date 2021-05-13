# Faire une requête "POST"

Dans `NvPost.js`

- Avec `onChange` dans les inputs, on met dans le state chaque chose qu'on va écrire dans le state

- On importe axios, pour faire la requête

- `onClick={this.postArticle}`, On appel la fonction `postArticle` avec chaque fois qu'on appuie sur le boutton `Ajouter un Article`

- La fonction `postArticle`, reçois le nouveau article qui a été valider dans le formulaire, puis il l'envoie dans la base de données de l'api via `axios`, puis remet le formulaire à zéro

Dans `NvPost.js`

    import React, { Component } from 'react';
    import axios from 'axios';
    import './NvPost.css';

    class NvPost extends Component {

        state = {
            title: '',
            content: '',
            author: 'Hugo'
        }

        postArticle = () => {

            //mettre les valeur du state qui vient des inputs, ici
            const NvPost = {
                title : this.state.title,
                body : this.state.content,
                auteur : this.state.author,
            }

            //requête http post, pour poster un article
            axios.post('https://jsonplaceholder.typicode.com/posts', NvPost)
                .then(response => {
                    console.log(response);
                })
            ;

            // on remet le formulaire a zéro
            this.setState({
                title: '',
                content: '',
                author: 'Hugo'
            });
        }

        render () {
            return (
                <div className="NvPost form-group">
                    <h1>Ajouter un Article</h1>
                    
                    <label>Titre</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        value={this.state.title} 
                        onChange={(event) => this.setState({title: event.target.value})} 
                    />

                    <label>Contenu</label>
                    <textarea 
                        className="form-control" 
                        rows="4" 
                        value={this.state.content} 
                        onChange={(event) => this.setState({content: event.target.value})} 
                    />
                    
                    <label>Auteur</label>
                    <select className="form-control" 
                        value= {this.state.author} 
                        onChange={(event) => this.setState({author: event.target.value})}
                    >
                        <option value="Hugo">Hugo</option>
                        <option value="Juliette">Juliette</option>
                        <option value="John">John</option>
                    </select>
                    
                    <button 
                        className="btn btn-success my-3"
                        onClick={this.postArticle}
                    >Ajouter un Article</button>
                </div>
            );
        }
    }

    export default NvPost;