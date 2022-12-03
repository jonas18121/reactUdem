import React from 'react';
import './Item.css';
import happy from '../../assets/happy.svg';
import { ReactComponent as Cat } from '../../assets/cat.svg';

function Item() {

    const myLetter = 'g';

    return (
        <div>
            <h1 className="titre-item">Hello depuis Item</h1>

            <img src={`/crevase.jp${myLetter}`} alt="" />

            <img src={happy} alt="" />

            <Cat />
        </div>
    )
}

export default Item;
