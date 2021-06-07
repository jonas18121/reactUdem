# Mise en place

Quand utiliser l'api contexte ?

- contexte faite partie de react de base

- On utilise l'api contexte, pour des changement globaux, qu'on ne vas pas répété plusieurs fois à la suite par minute, dans ce cas redux est fait pour des changement rapide, nombreux, par mis les composants. 

- exemple de changement globaux qu'on pourrait utiliser avec l'api contexte, le ligth mode, dark mode, ou un user connecter peut voir certaines chose qu'un autre user ne pourrait pas voir.

Créer un petit projet pour faire le teste

    > create-react-app context-dark-mode