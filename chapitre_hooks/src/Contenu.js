import React, { useState, useEffect }  from 'react'

export default function Contenu() {

    const [monState, setMonState] = useState(0);

    const [dataImg, setDataImg] = useState();


    const ajouteState = () => {
        setMonState(monState + 1 );
    }

    const retireState = () => {
        if(monState > 0 ) return setMonState(monState - 1 );
    }

    useEffect(() => {

        const fetchData = async () => {
            const reponse = await fetch('https://api.thecatapi.com/v1/images/search');

            const data = await reponse.json();

            // console.log(data);
            setDataImg(data[0].url);
        }

        fetchData();

    }, []);

    return (
        <div>
            <div>
                <p>{monState}</p>

                <button onClick={retireState}>Click pour retirer - 1</button>
                <button onClick={ajouteState}>Click pour ajouter + 1</button>
            </div>

            <div>
                <img src={dataImg} />
            </div>
        </div>
    )
}
