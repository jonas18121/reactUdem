import React, { useState, useEffect }  from 'react';
import './Navbar.css';

export default function Navbar() {

    const [ largeur, setLargeur ] = useState(window.innerWidth)

    const [ toggleMenu, setToggleMenu ] = useState(false);

    const toggleNavScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if (window.innerWidth > 500) {
                setToggleMenu(false);
            }
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    },[]);

    return (
        <div>
            <nav>
                {(largeur > 500 || toggleMenu) && (

                    <div className="liste" >
                        <div className="items" >Accueil</div>
                        <div className="items" >Services</div>
                        <div className="items" >Contact</div>
                    </div>
                )}
            </nav>

            <div onClick={toggleNavScreen} className="btn">BTN</div>
        </div>
    )
}
