## Concept
Dans le bus, entre deux réunions, chez mamie… Laissez-vous tenter par une petite partie de quiz musical. Avec Music Wizz, testez votre culture musicale avec 10 questions auxquelles vous répondez en temps limité.

Jouer rapidement en seulement 4 étapes
 - Entrez votre pseudo (3 caractères minimum)
 - Choisissez votre niveau de difficulté
 - Choisissez votre genre musical préféré
 - Cliquez sur play !

Choisissez votre niveau de difficulté basé sur la rapidité :
 - Easy : 15 sec
 - Medium : 10 sec
 - Hard : 10 sec et vous ne pouvez pas choisir votre catégorie

En mode 'easy' ou 'medium', choisissez votre catégorie de musique :
 - rap
 - rock/metal
 - pop
 - musiques de film

Pendant la partie, vous avez 4 choix de réponse, choisissez celui qui vous semble être le bon et vous passerez automatiquement à la question suivante.
Un timer vous indique le temps restant pour répondre.
Une barre de progression vous indique si vous avez répondu correctement aux questions précédentes.
À la fin de la partie, retrouvez votre score final ainsi qu'un résumé de la partie.
À n'importe quel moment, vous pouvez retourner sur la home ou redémarrer la partie. 

### Maquettes finales

![alt text](./frontend/src/assets/wireframes/P2%20home.png)
![alt text](./frontend/src/assets/wireframes/P2%20quizz.png)
![alt text](./frontend/src/assets/wireframes/P2%20score.png)

### Polices et couleurs

- Font: Kadwa
- Primary color: #9274AE
- Secondary color: #E7E7E7

### Dependancies
 - Axios
 - React-countdown-circle-timer
 - React-router-dom
 - React-youtube
 - React-fontawesome
 - Sass
 - TailWind

### API
Une API a été créée spécialement pour cette application : 
https://api.elie-parthenay.fr/
Youtube data API : 
https://developers.google.com/youtube/v3/getting-started

### Méthode de travail 
Method Agile Scrum

## Installation & Utilisation

Ce template est conçu pour servir de base à tous les projets (P2/P3) suivants la stack React-Node-MySQL telle qu'enseignée à la Wild Code School. Il est préconfiguré avec un ensemble d'outils qui aideront les élèves à produire un code correspondant mieux aux standards du monde du travail et plus facile à maintenir, tout en restant simple à utiliser.

### Pour commencer un projet

- Sur VSCode, installer les plugins **Prettier - Code formatter** et **ESLint** et les configurer
- Cloner ce dépôt, se rendre à l'intérieur
- Lancer la commande `npm run setup`
- _NB: Pour exécuter le backend, un fichier d'environnement avec les données de connexion d'une BdD valide est nécesaire. Un modèle se trouve dans `backend/.env.sample`_

### Liste des commandes et signification

- `setup` : Initialisation du frontend et du backend ainsi que des outils
- `dev` : Démarrage des deux serveurs (frontend + backend) dans un même terminal
- `dev-front` : Démarrage d'un serveur React pour le frontend
- `dev-back` : Démarrage d'un serveur Express pour le backend
- `lint` : Exécute des outils de validation de code (sera exécutée automatiquement à chaque _commit_)
- `fix` : Fixe les erreurs de formatage (à lancer si `lint` ne passe pas)

## Pour plus d'informations

### Listing des outils utilisés

- _Concurrently_ : Permet d'exécuter plusieurs commandes dans un même terminal
- _Husky_ : Permet d'exécuter des actions en déclenchement de commandes _git_
- _Vite_ : Alternative à _Create-React-App_, embarquant moins de packages pour une expérience plus fluide
- _ESLint_ : Outil de "qualité de code", permet de s'assurer que des règles pré-configurées sont bien respectées
- _Prettier_ : Outil de "qualité de code" également, se concentre plus particulièrement sur le style du code
- _Standard Airbnb_ : L'un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS
- _Nodemon_ : Outil permettant de relancer un serveur à chaque fois qu'un des fichiers est modifié

### Reste à faire

Prettier:

- corriger la config front/back pour qu'elle suive le même standard qu'ESLint

Testing:

- ajouter des tests unitaires sur le front et le back, avec les commandes associées

Vérifications:

- s'assurer que les principaux outils utilisés lors de la formation sont compatibles avec ce template
- deploiements ? Compatible avec Netlify/Vercel/Heroku ?
- fonctionnement avec yarn/pnpm
