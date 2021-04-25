import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-primary mb-3 py-0">
                <div className='container'>
                    <a href='/' className='navbar-brand'>AppContacts</a>

                    <ul className='navbar-nav'>
                        <li className='nav-item ml-auto'>
                            <Link to='/listeContact' className='nav-link'>Accueil</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
