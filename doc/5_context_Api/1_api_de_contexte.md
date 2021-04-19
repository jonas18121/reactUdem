# Qu'est ce que l'API de contexte ?

Lire : https://fr.reactjs.org/docs/context.html

L'API de contexte offre un moyen de faire passer des données à travers l’arborescence du composant sans avoir à passer manuellement les props à chaque niveau.

Il gère notre objet `state`

Dans une application React typique, les données sont passées de haut en bas (du parent à l’enfant) via les props, mais cela peut devenir lourd pour certains types de props (ex. les préférences régionales, le thème de l’interface utilisateur) qui s’avèrent nécessaires pour de nombreux composants au sein d’une application. 

Le Contexte offre un moyen de partager des valeurs comme celles-ci entre des composants sans avoir à explicitement passer une prop à chaque niveau de l’arborescence.

exemple : 

On a notre composant parent nommé `App` qui a plusieurs composants enfants de plusieurs niveau différent, et on veut faire passer notre `state` de `App` dans l'enfant du 5èmes niveau.

    App
        child level 1
            child level 2
                child level 3
                    child level 4
                        child level 5 

- Sans l'API de contexte : On va devoir créer des props en cascade pour chaque enfant avant d'arriver à l'enfant du 5ème niveau, on va devoir trouver des noms de `props` et éviter de faire des erreurs. ça pourra devenir vite une usine à gaz.

- Avec l'API de contexte : L'API de contexte va englober toute notre application qu'on va appler ça le contexte et tout les states seront dans le contexte. Donc avec l'API de contexte. On va pouvoir passer directement notre `state à l'enfant du 5ème niveau sans créer des props en cascade pour chaque enfant`.

## Context API vs Redux

Redux a la même fonction que l'API de contexte sauf que :

- L'API de contexte, c'est pour les petites application
et
- Redux, c'est pour les grosses application
