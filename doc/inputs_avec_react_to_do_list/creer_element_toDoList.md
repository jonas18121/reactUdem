# Créer les éléments de la To Do List



Dans `todolist\src\components\toDoList\Todo.js`
on va permettre d'avoir des petites cartes qui s'ajouterons sous le input.
ces cartes vont nous permettre d'avoir la liste de chose à faire, du'on a rentrer dans l'intput.

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

        renderToDo = () => {

            return this.state.items.map((item, index) => {
                return (

                    <div className="card mb-3" key={index}>
                        <div className="card-body" >
                            <h4>
                                {item.element}

                                <i 
                                    className="fas fa-times"
                                    style={
                                        { 
                                            cursor: 'pointer', 
                                            float: 'right', 
                                            color:'red'
                                        }
                                    }
                                ></i>

                            </h4>
                        </div>
                    </div>   
                )
            })
        }
        
        render() {
            
            return (
                <React.Fragment>
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
                    {this.renderToDo()}
                </React.Fragment>
            )
        }
    }

On a créer une methode nommé renderToDo(), c'est cette méthode qui va nous permettre de créer une carte pour chaque chose a faire qu'on aura entrer dans l'input. 
Si on a 5 choses a faire, ça va créer 5 petites carte.  

Puis 

On va appeler la methode renderToDo() dans le rendu final et on va entourer le tout avec React.Fragement pour ne pas rajouter une div inutile 