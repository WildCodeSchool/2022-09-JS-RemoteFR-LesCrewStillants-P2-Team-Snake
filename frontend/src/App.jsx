import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Answer from "./pages/Answer";
import Home from "./pages/Home";
import Finish from "./pages/Finish";

function App() {
  const [musicsGenre, setMusicsGenre] = useState("");
  const [attribButton, setAttribButton] = useState("");

  // fonction d'apparition des boutons après avoir écrit 3 caractères dans l'input text
  const [showDifficulty, setShowDifficulty] = useState(false); // Affichage des boutons de la difficultée quand le pseudo est correctement saisi
  const [userPseudo, setUserPseudo] = useState("");
  const changePseudo = (e) => {
    setUserPseudo(e.target.value);
    if (e.target.value.split("").length >= 3) {
      setShowDifficulty(true);
    } else setShowDifficulty(false);
  };

  // Function de selection de la difficultée
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const handleClickDifficulty = (e) => {
    setSelectedDifficulty(e.currentTarget.id);
  };

  // Function de selection du genre de musique
  const [selectedGenre, setSelectedGenre] = useState();
  const [gameGenre, setGameGenre] = useState("");
  const handleClickGenre = (e) => {
    setSelectedGenre(e.currentTarget.id);
    if (selectedDifficulty != 3) {
      setGameGenre(e.currentTarget.innerHTML);
    }
  };

  // Tableau de la configuration de la partie
  // const [gameConfiguration, setGameConfiguration] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedDifficulty={selectedDifficulty}
              selectedGenre={selectedGenre}
              userPseudo={userPseudo}
              changePseudo={changePseudo}
              handleClickDifficulty={handleClickDifficulty}
              handleClickGenre={handleClickGenre}
              showDifficulty={showDifficulty}
              setMusicsGenre={setMusicsGenre}
              musicsGenre={musicsGenre}
              attribButton={attribButton}
              setAttribButton={setAttribButton}
            // gameConfiguration={gameConfiguration}
            // setGameConfiguration={setGameConfiguration}
            />
          }
        />
        <Route
          path="/answer"
          element={
            <Answer
              selectedDifficulty={selectedDifficulty}
              selectedGenre={selectedGenre}
              userPseudo={userPseudo}
              musicsGenre={musicsGenre}
              gameGenre={gameGenre}
            />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </div>
  );
}

export default App;
