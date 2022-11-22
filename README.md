## Concept
On the bus, between two meetings, at grandma's... Let yourself be tempted by a game of musical quiz. With Music Wizz, test your musical culture with 10 questions that you answer in a limited time.

Quick play in just 4 steps :
 - Enter your nickname (3 characters minimum)
 - Choose your level of difficulty
 - Choose your favorite music genre
 - Click play !

3 levels of difficulty based on speed :
 - Easy : 15 sec
 - Medium : 10 sec
 - Hard : 10 sec and you cannot choose your categorie

In 'easy' or 'medium' mode, choose your categorie of musics :
 - rap
 - rock/metal
 - pop
 - movie soundtrack

During the party, you have 4 answer choices, choose the one you think is the right one and you automatically go to the next question. 
A timer allows you to estimate the time you have left to answer.
The progress bar will let you know if you answered correctly or not.
At the end of the game, find your final score and a summary of the game.
At any time, you can return to the home page or restart the game.

### Wireframes

![alt text](./frontend/src/components/P2%20home.png)
![alt text](./frontend/src/components/P2%20quizz.png)
![alt text](./frontend/src/components/P2%20score.png)

### Font & Colors

- Font: Kadwa
- Primary color: #9274AE
- Secondary color: #E7E7E7

### Dependancies
 - Axios
 - React-countdown-circle-timer
 - React-youtube

### API
The API was created specifically for the application : 
https://api.elie-parthenay.fr/
Youtube data API : 
https://developers.google.com/youtube/v3/getting-started

### Working method 
Method Agile Scrum

## Setup & Use

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated