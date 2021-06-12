# Utiliser l'extention emmet dans react

- Dans Vs Code, on excute cette commande

    > ctrl + maj + p

    ou 

    > ctrl + p

- ça va ouvrir une barre de recherche et dedans, on va ecrire

    > `> Open Settings (JSON)`


- ça va ouvrir le fichier `settings.json`, dedans on va rajouter ce paramètre

    "emmet.includeLanguages": {
        "javascript" : "javascriptreact"
    }


exemple dans `settings.json`


    {
        "editor.suggestSelection": "first",
        "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
        "editor.codeActionsOnSave": null,
        "emmet.includeLanguages": {
            "javascript" : "javascriptreact"
        }
    }