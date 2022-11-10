import { Routes, Route } from "react-router-dom";
import Answer from "./pages/Answer";
import Home from "./pages/Home";
import Finish from "./pages/Finish";
import React, { useState } from "react";

function App() {

  const [selectedDifficulty, setSelectedDifficulty] = useState();
  const [selectedGenre, setSelectedGenre] = useState();
  const [userPseudo, setUserPseudo] = useState();
  const [showDifficulty, setShowDifficulty] = useState(false);

  // fonction d'apparition des boutons après avoir écrit 3 caractères dans l'input text
  const changePseudo = (e) => {
    setUserPseudo(e.target.value);
    if (e.target.value.split("").length >= 3) {
      setShowDifficulty(true);
    } else setShowDifficulty(false);
  };

  const handleClickDifficulty = (e) => {
    setSelectedDifficulty(e.currentTarget.id);
  };

  const handleClickGenre = (e) => {
    setSelectedGenre(e.currentTarget.id);
  };


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home selectedDifficulty={selectedDifficulty} selectedGenre={selectedGenre} userPseudo={userPseudo} changePseudo={changePseudo} handleClickDifficulty={handleClickDifficulty} handleClickGenre={handleClickGenre} showDifficulty={showDifficulty} />} />
        <Route path="/answer" element={<Answer selectedDifficulty={selectedDifficulty} selectedGenre={selectedGenre} userPseudo={userPseudo} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </div>
  );
}

export default App;
