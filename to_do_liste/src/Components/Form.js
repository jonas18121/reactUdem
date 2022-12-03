import {useState} from 'react';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

export default function Form(){

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chat", id: uuidv4()},
        {txt: "Promener le chien", id: uuidv4()},
        {txt: "Promener le boeuf", id: uuidv4()},
    ]);

    // On crée un nouveau state juste pour recevoir les données de l'input
    const [stateInput, setStateInput] = useState('');

    /**
     * supprimer une tache de la liste
     * 
     * @param {int} id 
     */
    const deleteElement = id => {
        // Ici on utilise filter pour retourner tous les éléments qui ont un id différent
        // de celui que l'on a selectionné pour le supprimer
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        });

        // setDataArr pour mettre le state à jour
        setDataArr(filteredState);
    }

    /**
     * 
     * Ajouter une tache dans la liste
     */
    const addTodo = e => {
        e.preventDefault(); // évite le rechargement de la page

        const newArr = [...dataArr]; // On fait une copie de tous le contenu de dataArr dans un nouveau tableau nommé newArr
        
        const newTodo = {}; // on crée un nouvel objet
        newTodo.txt = stateInput; // On met la valeur qui vient de l'input dans newTodo.txt
        newTodo.id = uuidv4(); // on lui ajoute un id aussi

        newArr.push(newTodo); // On met le nouvel objet newTodo dans le nouveau tableau newArr

        setDataArr(newArr); // On met a jour le state dataArr avec le nouveau tableau newArr
        
        setStateInput(''); // Mettre le champ input à zéro/vide
    }

    /**
     * recevoir l'évènnement de puis l'input pour permettre que stateInput ce mette a jour
     */
    const linkedInput = e => {
        setStateInput(e);
    }

    return (
        <div className="m-auto px4 col-12 col-sm-10 col-lg_6">
            <form 
                onSubmit={ e => addTodo(e) }
                className="mb-3"
            >
                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
                <input 
                    value={stateInput} // Lier le state stateInput à la valeur de l'input
                    onInput={ e => linkedInput(e.target.value) }// lorsqu'on qu'on écrit dans l'input, on appel la methode linkedInput en lui passant les valeurs grace à l'évènnement e 
                    type="text" 
                    className="form-control" 
                    id='todo' 
                />
                <button className="mt-2 btn btn-primary d-block">Envoyer</button>
            </form>

            <h2>liste des choses à faire</h2>
            <ul className="list-group">
                {
                    dataArr.map((item, index) => {

                        // On ne va pas utiliser index dans la key car il n'est pas très fiable
                        return (
                            <Item 
                                txt={item.txt}
                                key={item.id}
                                id={item.id}
                                delFunc={deleteElement}
                            />
                        );
                    })
                }
            </ul>
        </div>
    )
}