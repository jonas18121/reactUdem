import React from 'react'

import './Post.css'

const post = (props) => (

    <article className="Post">
        <h1>{props.titre}</h1>

        <div>
            <div className="Auteur">Auteur</div>
        </div>

    </article>
);

export default post;