# Création de l'interface

Pour la création de l'interface TodoList :

- On a installer Bootstrap : > npm install bootstrap
- Importer Bootstrap dans App.js : import 'bootstrap/dist/css/bootstrap.min.css';
- Creer la classe Todo dans Todo.js
- importer Todo.js dans App.js : import Todo from './components/toDoList/Todo';
- this.onSubmit et this.onChange qui sont dans Todo.js, sont des méthode qu'on va creer après

    import React, { Component } from 'react'

    export default class Todo extends Component {

        state = {
            element: ''
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
