import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Answer from "./pages/Answer";
import Home from "./pages/Home";
import Finish from "./pages/Finish";

function App() {
  // Récupération de tout les genres de musique de l'api
  const [musicsGenre, setMusicsGenre] = useState("");

  // Tableau des 3 catégories a affciher sur les boutons de la page home
  const [attribButton, setAttribButton] = useState("");

  // Durée de diffusion de la musique
  const [diffusionDuration, setDiffusionDurantion] = useState(15);

  // Etape actuelle de la partie
  const [currentStep, updateCurrentStep] = useState(1);

  // Pseudo de l'utilisateur
  const [userPseudo, setUserPseudo] = useState("");

  // Vérifie si une dificultée à été choisi par l'utilisateur
  const [showDifficulty, setShowDifficulty] = useState(false);

  // Difficultée choisie par l'utilisateur
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  // Genre choisi par l'utilisateur
  const [selectedGenre, setSelectedGenre] = useState(0);

  // Tableau de la configuration de la partie
  const [gameConfigurations, setGameConfiguration] = useState([]);

  // changement de value dans l'input pseudo
  const changePseudo = (e) => {
    // Modification du userPseudo dans le local storage & dans le state avec la nouvelle valeur input
    localStorage.setItem("userPseudo", JSON.stringify(e.target.value));
    setUserPseudo(e.target.value);

    // Si la taille du pseudo est = ou > 3, alors on affiche le choix de la difficultée, sinon on la désaffiche
    if (e.target.value.split("").length >= 3) {
      setShowDifficulty(true);
    } else setShowDifficulty(false);

    // Pas besoin d'expliquer :D
    if (
      e.target.value.toLowerCase().toString().replaceAll(" ", "") ===
      "antholebg"
    ) {
      window.location =
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
    }
  };

  useEffect(() => {
    // Si un pseudo des déja présent dans le local storage alors on le stock dans la state
    if (JSON.parse(localStorage.getItem("userPseudo"))) {
      setUserPseudo(JSON.parse(localStorage.getItem("userPseudo")));

      // Si la taille du pseudo déja présent dans le local storage est = ou > 3, alors on affiche le choix de la difficulté
      if (JSON.parse(localStorage.getItem("userPseudo")).length >= 3) {
        setShowDifficulty(true);
      }
    }
  }, []);

  // Lorsque l'utilisateur choisi une difficulté
  const handleClickDifficulty = (e) => {
    // Si l'id de la difficulté est compris entre 1 et 3, alors je stock le choix dans le local storage & state
    if (e.currentTarget.id >= 1 && e.currentTarget.id <= 3) {
      setSelectedDifficulty(e.currentTarget.id);
      localStorage.setItem(
        "userDifficulty",
        JSON.stringify(e.currentTarget.id)
      );

      // Si le choix de la difficultée est 3, alors le genre est défini "" dans le local storage
      if (+e.currentTarget.id === 3) {
        localStorage.setItem("userGenre", JSON.stringify(""));
      }
    }
  };

  // Lorsque l'utilisateur choisi un genre, si la dificultée est différente de 3, alors le choix est stocké dans le state
  const handleClickGenre = (e) => {
    if (selectedDifficulty !== 3) {
      setSelectedGenre(e.currentTarget.id);
      localStorage.setItem(
        "userGenre",
        JSON.stringify(e.currentTarget.innerHTML)
      );
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedDifficulty={selectedDifficulty}
              selectedGenre={selectedGenre}
              changePseudo={changePseudo}
              handleClickDifficulty={handleClickDifficulty}
              handleClickGenre={handleClickGenre}
              showDifficulty={showDifficulty}
              setMusicsGenre={setMusicsGenre}
              musicsGenre={musicsGenre}
              attribButton={attribButton}
              setAttribButton={setAttribButton}
              userPseudo={userPseudo}
              setSelectedDifficulty={setSelectedDifficulty}
            />
          }
        />
        <Route
          path="/answer"
          element={
            currentStep === 11 ? (
              <Navigate to="/finish" />
            ) : (
              <Answer
                musicsGenre={musicsGenre}
                diffusionDuration={diffusionDuration}
                setDiffusionDurantion={setDiffusionDurantion}
                gameConfigurations={gameConfigurations}
                setGameConfiguration={setGameConfiguration}
                currentStep={currentStep}
                updateCurrentStep={updateCurrentStep}
              />
            )
          }
        />
        <Route path="/home" element={<Home />} />
        <Route
          path="/finish"
          element={
            <Finish
              gameConfigurations={gameConfigurations}
              setGameConfiguration={setGameConfiguration}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
