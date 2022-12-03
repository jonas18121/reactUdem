import React, { useState } from 'react'
import './Onglet.css'

export default function Onglet() {

    const [ toggleState, setToggleState ] = useState(1);

    const goFrancais = () => {
        setToggleState(1);
    }

    const goEnglish = () => {
        setToggleState(2);
    }

    return (
        <div>
            <div className='contBtn'>

                <div 
                    onClick={goFrancais}
                    className={`onglets ${toggleState === 1 ? 'active' : ''}`}
                >
                    Français
                </div>

                <div 
                    onClick={goEnglish}
                    className={`onglets ${toggleState === 2 ? 'active' : ''}`}
                >
                    Anglais
                </div>
            </div>
            <div className='container'>

                {toggleState === 1 ? 
                
                    <p className='contenu fr'>
                        FRANCAIS : OK /ɔkɛ/ (/oke/ au Québec) est une expression abrégée de l'anglais américain qui désigne l'approbation, 
                        l'acceptation, l'accord, l'assentiment, ...
                        OK /ɔkɛ/ (/oke/ au Québec) est une expression abrégée de l'anglais américain qui désigne l'approbation, 
                        l'acceptation, l'accord, l'assentiment, ...
                        OK /ɔkɛ/ (/oke/ au Québec) est une expression abrégée de l'anglais américain qui désigne l'approbation, 
                        l'acceptation, l'accord, l'assentiment, ...
                        OK /ɔkɛ/ (/oke/ au Québec) est une expression abrégée de l'anglais américain qui désigne l'approbation, 
                        l'acceptation, l'accord, l'assentiment, ...
                        OK /ɔkɛ/ (/oke/ au Québec) est une expression abrégée de l'anglais américain qui désigne l'approbation, 
                        l'acceptation, l'accord, l'assentiment, ...
                        OK /ɔkɛ/ (/oke/ au Québec) est une expression abrégée de l'anglais américain qui désigne l'approbation, 
                        l'acceptation, l'accord, l'assentiment, ...
                    </p>

                :

                    <p className='contenu en'>
                        ANGLAIS : OK /ɔkɛ/ (/oke/ au Québec) est une expression abrégée de l'anglais américain qui désigne l'approbation, 
                        l'acceptation, l'accord, l'assentiment, ...
                        OK /ɔkɛ/ (/oke/ au Québec) est une expression abrégée de l'anglais américain qui désigne l'approbation, 
                        l'acceptation, l'accord, l'assentiment, ...
                        OK /ɔkɛ/ (/oke/ au Québec) est une expression abrégée de l'anglais américain qui désigne l'approbation, 
                        l'acceptation, l'accord, l'assentiment, ...
                        OK /ɔkɛ/ (/oke/ au Québec) est une expression abrégée de l'anglais américain qui désigne l'approbation, 
                        l'acceptation, l'accord, l'assentiment, ...
                        OK /ɔkɛ/ (/oke/ au Québec) est une expression abrégée de l'anglais américain qui désigne l'approbation, 
                        l'acceptation, l'accord, l'assentiment, ...
                        OK /ɔkɛ/ (/oke/ au Québec) est une expression abrégée de l'anglais américain qui désigne l'approbation, 
                        l'acceptation, l'accord, l'assentiment, ...
                    </p>
                }
            </div>
        </div>
    )
}
