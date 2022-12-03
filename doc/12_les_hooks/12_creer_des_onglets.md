# Créer des onglets

On va faire des onglets,
On aura 2 bouton un nommé `Francais` et l'autre nommé `Anglais`
Ils vont nous permettre de switcher entre deux textes, un en français et le deuxièmes en anglais


Dans `Onglet.js`

- On importe `Onglet.css`

- On importe `Onglet.js` dans `App.js`

- `const [ toggleState, setToggleState ] = useState(1);` on cree un `toggleState` qui va nous permettre de switcher entre les deux boutons des deux textes, en ajoutant une classe css nommé `active`, il faudra aller dans `Onglet.css` pour creer cette classe  

- on va creer les 2 boutons, un pour le fançais et l'autre pour l'anglais

    < div 
        onClick={goFrancais}

        className={`onglets ${toggleState === 1 ? 'active' : ''}`} >Français</div>

    - `onClick={goFrancais}` appel la fonction `goFrancais()` pour mettre dans  `toggleState` la valeur `1`

    - className={`onglets ${toggleState === 1 ? 'active' : ''}`} , la classe `onglets` sera toujours présente, par contre la classe `'active'` sera présente dans ce boutton seulement si `toggleState` a comme valeur `1`


    < div 
        onClick={goEnglish}

        className={`onglets ${toggleState === 2 ? 'active' : ''}`}>Anglais</div>

    - `onClick={goEnglish}` appel la fonction `goEnglish()` pour mettre dans  `toggleState` la valeur `2`

    - className={`onglets ${toggleState === 1 ? 'active' : ''}`} , la classe `onglets` sera toujours présente, par contre la classe `'active'` sera présente dans ce boutton seulement si `toggleState` a comme valeur `2`

    - `const goFrancais = () => { setToggleState(1); }` pour mettre dans `toggleState` la valeur `1`

    - `const goEnglish = () => {setToggleState(2);}` pour mettre dans `toggleState` la valeur `2`

- `{toggleState === 1 ? texte en fr : texte en en }` le ternaire qui affichera le de ces 2 textes en fonction de la valeur de `toggleState`

Dans `Onglet.js`

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
                <div className='constBtn'>

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


Dans `Onglet.css`

    body {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f1f1f1;
    }

    .contBtn {
        display: flex;
        justify-content: center;
    }

    .onglets {
        width: 250px;
        height: 50px;
        background: #f1f1f1;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid #333;
    }

    .container {
        width: 502px;
        height: 600px;
        text-align: justify;
        border: 1px solid #333;
        border-top: none;
    }

    .container p {
        padding: 40px;
        margin: 0;
    }

    .active {
        background: midnightblue;
        color: #fff;
    }