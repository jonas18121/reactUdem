# Règle des Hooks et multiple State

## multiple State

On peut créer autant de hooks du même nom, qu'on veut

Par exemple on peut utiliser plusieur `useState` dans le même fichier

## Règle des Hooks

1) Les `hooks` s'utiliser dans des composants de type fonction, et pas dans des composants de type classe

2) Il faut déclarer les hooks à la racine du composant de type fonction, et pas dans des fonctions/méthodes basic ou conditions ou boucle, ni dans le render