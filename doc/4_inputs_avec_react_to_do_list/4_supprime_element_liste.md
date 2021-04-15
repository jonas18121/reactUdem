# Supprimer un élément de la liste

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

        deleteItem = (index) => {

            const tabItem = this.state.items;
            tabItem.splice(index, 1);
            this.setState({
                items: tabItem
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
                                    onClick={() => this.deleteItem(index)}
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

ici, on crée la méthode deleteItem(), qui va nous permettre de supprimer une carte précise.

    deleteItem = (index) => {

        const tabItem = this.state.items;
        tabItem.splice(index, 1);
        this.setState({
            items: tabItem
        });
    }

- On met this.state.items dans la constante tabItem,
- On supprime un element à partir du nombre qui a été entrer dans le paramètre index, tabItem.splice(index, 1);
- On remet a jour this.state.items sans l'élément qui a été supprimer this.setState({ items: tabItem });

Dans le code JSX, on a ecrit notre méthode deleteItem(index) dans une fonction fléché pour pouvoir bien passé le paramètre index, sinon sa ne va pas bien fonctionner 

    onClick={() => this.deleteItem(index)}

Si, on lécrit comme onSubmit={this.onSubmit} ou onChange={this.onChange}, ça ne fonctionnera pas.

Quand on veut faire passé des paramètres dans une méthode, il faut le mettre dans une fonction fléché () => {}

    onClick={() => this.deleteItem(index)}

si, on a pas besoin de paramètre on passe juste la référence sans fonction fléché

    onChange={this.onChange}