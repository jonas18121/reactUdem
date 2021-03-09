import React, { Component } from 'react';


class Titre extends Component {

    render(){
        return (

            <div>
                <h1>Notre titre depuis un autre composant. </h1>
                {this.props.nom} <br />
                {this.props.children}
            </div>
        )
    }
}

export default Titre;



