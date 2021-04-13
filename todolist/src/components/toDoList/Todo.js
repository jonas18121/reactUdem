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
