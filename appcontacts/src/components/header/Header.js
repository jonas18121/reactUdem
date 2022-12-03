import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-primary mb-3 py-0">
                <div className='container'>
                    <a href='/' className='navbar-brand'>AppContacts</a>

                    <ul className='navbar-nav d-inline-block'>

                        <li className='nav-item d-inline-block mr-2'>
                            <Link to='/listeContact' className='nav-link'>Accueil</Link>
                        </li>

                        <li className='nav-item d-inline-block mr-2'>
                            <Link to='/ajouteContact' className='nav-link'>Ajouter</Link>
                        </li>

                        <li className='nav-item d-inline-block mr-2'>
                            <Link to='/apropos' className='nav-link'>à propos</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
