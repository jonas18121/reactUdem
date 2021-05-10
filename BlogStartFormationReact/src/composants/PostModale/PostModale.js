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
