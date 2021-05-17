# Règle des Hooks et multiple State

## multiple State

On peut créer autant de hooks du même nom, qu'on veut

Par exemple on peut utiliser plusieur `useState` dans le ême fichier

## Règle des Hooks

1) Les `hooks` s'utiliser dans des composants de type fonction, et pas dans des composants de type classe

2) Il faut déclarer les hooks à la racine du composant, et pas dans des fonctions ou conditions, ni dans le render