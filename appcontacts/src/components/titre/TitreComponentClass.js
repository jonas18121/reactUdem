import React, { Component } from 'react';
import './Titre.css'

class Titre extends Component {

    render(){
        return (

            <div>
                <h1>Notre titre depuis un composant de type classe. </h1>
                {this.props.nom} <br />
                {this.props.children}
            </div>
        )
    }
}

export default Titre;



