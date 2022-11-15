import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LecteurMusic from "../components/LecteurMusic";
import Button from "../components/Btn";
import StepNavigation from "../components/StepNavigation";
import ButtonHome from "../components/ButtonHome";
import ButtonRetry from "../components/ButtonRetry";
import "../assets/styles/App.css";
import "../assets/styles/Home.css";
import "../assets/styles/Step_progress.css";
import getMusics from "../services/getMusicsList";

function Answer({ gameGenre, selectedDifficulty }) {
  // Check loading component
  const [isLoading, setIsLoading] = useState(true);

  // Game configuration
  const [gameConfigurations, setGameConfiguration] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("");

  // Etapes de la partie
  const [currentStep, updateCurrentStep] = useState(1);
  const [selected, setSelected] = useState();
  const labelArray = [
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
    "Step 5",
    "Step 6",
    "Step 7",
    "Step 8",
    "Step 9",
    "Step 10",
  ];
  const updateStep = (step) => {
    updateCurrentStep(step);
    setCurrentVideo(gameConfigurations[step - 1][0].extract);
  };

  const handleClick = (e) => {
    setSelected(e.currentTarget.id);
    updateStep(currentStep + 1);
  };

  // Ajout du premier id vidéo
  setTimeout(() => {
    currentVideo === ""
      ? setCurrentVideo(gameConfigurations[0][0].extract)
      : null;
  }, "1000");

  // permet d'aller fetch mon api et d'initialiser le state "apiMusicList"
  useEffect(() => {
    const API_TEST = "https://api.elie-parthenay.fr/musics?genre=rock";
    const API = `https://api.elie-parthenay.fr/musics?genre=${gameGenre}`;
    axios
      .get(API)
      // Extract the DATA from the received response
      .then((res) => {
        setGameConfiguration(getMusics(res.data.results.musics));
        setIsLoading(false);
      })
      .catch((err) => console.error("Error in useEffect:", err));
  }, []);

  return (
    (isLoading && <h1> Is Loading</h1>) || (
      <>
        <header>
          <h1>Answers</h1>
        </header>
        <main>
          <div>
            <div>
              <div>
                <StepNavigation
                  labelArray={labelArray}
                  currentStep={currentStep}
                  updateStep={updateStep}
                />
              </div>
              <div className="buttons">
                <Button
                  id="1"
                  type={`${gameConfigurations[currentStep - 1][0].artist} - ${
                    gameConfigurations[currentStep - 1][0].title
                  }`}
                  onClick={handleClick}
                  disabled={currentStep === labelArray.length}
                  selected={selected === "1" ? "buttonClicked" : "button"}
                />
                <Button
                  id="2"
                  type={`${gameConfigurations[currentStep - 1][1].artist} - ${
                    gameConfigurations[currentStep - 1][1].title
                  }`}
                  onClick={handleClick}
                  selected={selected === "2" ? "buttonClicked" : "button"}
                />
                <Button
                  id="3"
                  type={`${gameConfigurations[currentStep - 1][2].artist} - ${
                    gameConfigurations[currentStep - 1][2].title
                  }`}
                  onClick={handleClick}
                  selected={selected === "3" ? "buttonClicked" : "button"}
                />
                <Button
                  id="4"
                  type={`${gameConfigurations[currentStep - 1][3].artist} - ${
                    gameConfigurations[currentStep - 1][3].title
                  }`}
                  onClick={handleClick}
                  selected={selected === "4" ? "buttonClicked" : "button"}
                />
              </div>
            </div>
            <div className="buttons">
              <Link to="/answer">
                <ButtonRetry />
              </Link>
              <Link to="/home">
                <ButtonHome />
              </Link>
            </div>
          </div>
        </main>
        <footer>footer</footer>
        <LecteurMusic
          selectedDifficulty={selectedDifficulty}
          videoId={currentVideo}
        />
      </>
    )
  );
}

export default Answer;
