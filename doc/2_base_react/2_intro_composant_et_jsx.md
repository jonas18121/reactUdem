# Introduction aux composants et à JSX

`import React from 'react';` veut dire qu'on va utiliser du JSX

Il y a 2 types de composant

- des composants de type classe
- des composants de type fonction

Les composants de type fonction commence avec une majuscule

Dans le JSX :

- il faut toujours retourner un seul bloque.

```js
    class App extends Component {

        render() {

            return (
                //1 seul bloque
            <div className="App">
                hello
            </div>
            );
        }
    }

    export default App;
```

```js
    class App extends Component {

        render() {

            return (
                //1 seul bloque, tous les balises sont regrouper dans 1 seul <div>
            <div className="App">
                <h1>hello</h1>
                <div>
                    <p>paragraphe 1</p>
                </div>
            </div>
            );
        }
    }

    export default App;
```


- Il faut fermer toutes les balises qui son seul exemple

En HTML :

```html
    <br>
    <hr>
    <input>
```

Devient en JSX :
```js
    <br />
    <hr />
    <input />
```

## Pourquoi on utilise le JSX ?    

### Le JSX est une notation Javascript

Admettons que l'on veut écrire un < h1> en JSX :
ça a pris qu'une ligne.
```js
    import React, { Component } from 'react';

    class App extends Component {

        render() {

            return (
            <div className="App">
                <h1>Notre Composant</h1>
            </div>
            );
        }
        }

    export default App;
```

Maintenant, on va écrire ce même < h1> en Javascript native :
```js
    import React, { Component } from 'react';

    class App extends Component {

        render() {

            return React.createElement(
                'div',
                {className: 'App'},
                React.createElement('h1', null, 'Notre Composant')
            )
            
        }
    }

    export default App;
```


## résultat

c'est plus long et compliquer d'écrire du code en Javascript native qu'en JSX
Il a fallut 4 lignes pour ecrire en Javascript native le < h1> , alors qu'en JSX ,il nous a fallut qu'une ligne.

## Les variables

On utilise les variable entre des accolades, on peut aussi faire des calcules entre les accolades

```js
    import React, { Component } from 'react';

    class App extends Component {

        render() {

            const nom = 'Juliette';

            return (
                <div className="App">
                    <h1>Notre Composant</h1>
                    {nom} <br />
                    { 1 + 1}

                    {true ? 1111 : 2222}
                </div>
            );
            
        }
    }

    export default App;
```

## Les functions 
```js
    class App extends Component {

        presentation = () => {
            return 'Hello world';
        }

        render() {

            return (
                <div className="App">
                <h1>Notre Composant</h1>
                { this.presentation() }
                </div>
            );
            
        }
        }

    export default App;
```

## Utiliser emmet dans le JSX

Aller dans ces onglets de VSCode File => Preferences => Settings => Extensions => Emmet => Edit in settings.json

ou 
```bash
    > Ctrl + Maj + p , 
```

puis on écrit dans la barre de recherche 
```bash
    > Open Settings (JSON)
```
dans settings.json, on a just a mettre ce qui est en dessous
```bash
    "emmet.includeLanguages": {
        "javascript" : "javascriptreact"
    },
```



Dans `settings.json`


    {
        "editor.suggestSelection": "first",
        "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
        "editor.codeActionsOnSave": null,
        "emmet.includeLanguages": {
            "javascript" : "javascriptreact"
        },
        "files.autoSave": "afterDelay",
        "emmet.excludeLanguages": [
        
            "markdown"
        ]
    }