import React from 'react'
import './Modale.css'

export default function Modale(props) {
    return (
        <div className="overlay" onClick={props.closeFunc} >
            <div className="contenu" onClick={props.stopPropa}>

                Hello Modale
                <button className="btnClose" onClick={props.closeFunc} >Fermer</button>
            </div>
        </div>
    )
}
