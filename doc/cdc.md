# Mini cahier des charges

## Les éléments

- Un formulaire pour inscrire le nom des joueur pour enregistrer les scores, afficher de base, et masquer une fois validé
- Un plateau de jeu
- 2 raquettes (joueur 1 et joueur 2) qui doivent se déplacé de haut en bas
- Une balle qui fait des allé retour selon des trajectoires calculés
  - Doit rebondir selon un angle défini selon l’endroit de la raquette qu’elle touche, la position de la raquette ? , et l’endroit du mur (haut et bas) qu’elle touche, et sa direction (vers joueur 1 ou 2). => Chercher une idée sur le net !
  - Accorder un point au joueur adverse si elle tape le mur droite ou gauche, et repartir du centre (à une position aléatoire ? )
  - Etre animé pour que les joueurs puissent la suivre. => Trouver comment faire
  - Avoir sa vitesse qui s’incrémente au file de la partie (à définir en fonction du temps, ou nombre d’échange entre joueur ?)
- Un header avec le nom des joueurs et les scores de la partie en cours
- Un bouton pour accèder à la liste des scores
- Un bouton pour lancer la partie en cours

## Technos

- nodeJS
- React
- Mongo pour save les scores ?
  
    ```json
      {
        name: string,
        scrore: integer
      }
    ```
