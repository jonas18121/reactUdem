# Comprendre l'utilisation de Redux

1) On a un `composant` avec un `state` qu'on veut modifier

2) Pour ne plus s'occuper du `state de ce composant` et avoir accès à ce `state` partout, on va connecter ce `composant` à un `STORE`

3) Lorsque le `state` est dans le `STORE` on y a accès partout

4) Le `composant` va envoyer des `ACTION` nommé `DISPATCH` (envoyer) pour modifier le `state` 

5) Ces `ACTION` vont aller dans un `REDUCER` qui va écouter l'`ACTION` puis modifier le `state` selon l'`ACTION` envoyer et le `REDUCER` va envoyer le `state` modifier au `STORE`

6) Le `STORE` met à jour le `state` et va envoyer le nouveau `state` dans le `composant`

