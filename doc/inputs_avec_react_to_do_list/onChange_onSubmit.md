# Gérer "onChange" et "onSubmit"

Dans `todolist\src\components\toDoList\Todo.js`

    import React, { Component } from 'react'

    export default class Todo extends Component {

        state = {
            element: '',
            items : []
        }

        onChange = (e) => {

            this.setState({

                [e.target.name] : e.target.value
            });
        }

        onSubmit = (e) => {
            e.preventDefault();
            this.setState({
                element : '',
                items: [...this.state.items, {element : this.state.element}]
            });
        }
        
        render() {
            return (
                <div className="card my-3">

                    <div className="card-header">
                        <p>To-Do List</p>
                    </div>

                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>

                            <div className="form-group">

                                <label htmlFor="element">Chose à faire</label>

                                <input type="text" 
                                    className="form-control form-control-lg"
                                    name="element"
                                    onChange={this.onChange}
                                    value={this.state.element}
                                />
                            </div>

                            <button className="btn btn-primary btn-block">Ajouter une chose à faire !</button>
                        </form>
                    </div>
                </div>
            )
        }
    }

On va créer un tableau vide nommé items dans l'objet state. 

`Dans l'input` qui as un attribut name qui est égale à "element" `name="element"`, avec l'attribut `onChange`, on va écouter chaque modification qui ce fera dedans et il va appelé la fonction this.onchange() `onChange={this.onchange}`

    onChange = (e) => {

        this.setState({

            [e.target.name] : e.target.value
        });
    }

La fonction `onChange()` va modifier l'objet state, 
il va cibler le name `name="element"` de l'input qui envoie l'évènnement avec `e.target.name`
`e.target.value` va cibler ce qui a été ecrit dans l'input


    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            element : '',
            items: [...this.state.items, {element : this.state.element}]
        });
    }

Avec la fonction `onSubmit`, on va remettre zéro la propriété `element de this.state.element`.
Car sans la fonction `onSubmit`, tout ce qui est écrit dans l'intput est contenu dans la propriété `element de this.state.element`

    items: [...this.state.items, {element : this.state.element}]

Ici, `on utilise le spread opérator ... , avec this.state.items` pour rentrer chaque élément qui a été submit dans le tableau items en tant que `objet`. 
Si on ne met pas le spread opérator ... , les éléments qui sont déjà rentrer dans le tableau items ne seront plus considérer comme objet mais plutôt comme string dans un tableau.

`Donc on met ce qu'il y a dans this.state.element pour le mettre dans ...this.state.items`