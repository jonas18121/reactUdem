import React, { Component } from 'react'

export default class AddContact extends Component {

    state = {
        nom : '',
        email : '',
        tel : ''
    }
    
    render() {
        return (
            <div className="card mb-3">
                <div className="card-header" >Ajouter un contact</div>

                <div className="card-body" >

                    <form>

                        <div className="form-group">
                            <label htmlFor="nom">Nom</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Entrez un nom ..."
                                name="nom"
                                value={this.state.nom}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Entrez un Email ..."
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="tel">Téléphone</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Téléphone ..."
                                name="tel"
                                value={this.state.tel}
                                onChange={this.onChange}
                            />
                        </div>

                        <input
                            type="submit"
                            value="Ajouter un contact"
                            className="btn btn-block btn-primary"
                        />
                    </form>
                </div>
            </div>
        )
    }
}
