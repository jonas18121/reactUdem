import React, { useState, useEffect } from 'react'

export default function useCatImg() {

    const [dataImg, setDataImg] = useState();

    useEffect(() => {

        const fetchData = async () => {
            const reponse = await fetch('https://api.thecatapi.com/v1/images/search');

            const data = await reponse.json();

            setDataImg(data[0].url);
        }
        fetchData();
    }, []);


    return dataImg;
}
