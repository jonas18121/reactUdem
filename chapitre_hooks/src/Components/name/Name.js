import React from 'react';
import { useDispatch } from 'react-redux';

export default function Name() {

    const dispatch = useDispatch();

    const handleUpdate = (event) => {
        dispatch({
            type: 'UPDATE',
            payload: event.target.value
        });
    }



    return (
        <div>
            <input 
                type="text"
                placeholder="Tapez du texte"
                onChange={handleUpdate}   
            />
        </div>
    )
}
