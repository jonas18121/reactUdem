import React from 'react';
import './Counter.css';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {

    const { count, name } = useSelector(state => ({
        ...state.counterReducer,
        ...state.nameReducer
    }));

    const dispatch = useDispatch();

    const incrementCount = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }

    const decrementCount = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }


    return (
        <div>
            <h2>Compteur : { count }</h2>

            <div className="bloc-btn">
                <button onClick={incrementCount} > + </button>
                <button onClick={decrementCount} > - </button>
            </div>

            <h2>{ name }</h2>
        </div>
    )
}
