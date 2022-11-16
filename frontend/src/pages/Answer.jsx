import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import axios from "axios";
import LecteurMusic from "../components/LecteurMusic";
import Button from "../components/Btn";
import StepNavigation from "../components/StepNavigation";
import ButtonHome from "../components/ButtonHome";
import ButtonRetry from "../components/ButtonRetry";
import getMusics from "../services/getMusicsList";
import setButtonPosition from "../services/setButtonPosition";

function Answer({
  gameGenre,
  selectedDifficulty,
  diffusionDuration,
  setDiffusionDurantion,
}) {
  // Check loading component
  const [isLoading, setIsLoading] = useState(true);

  // Game configuration
  const [gameConfigurations, setGameConfiguration] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("");
  const [buttonPositionArray, setButtonPositionArray] = useState([]);

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
    setButtonPositionArray(setButtonPosition());
  };

  const handleClick = (e) => {
    if (currentStep === 10) {
      window.location = "/finish";
    }
    setSelected(e.currentTarget.id);
    updateStep(currentStep + 1);
  };

  // Ajout du premier id vidéo
  setTimeout(() => {
    if (currentVideo === "") {
      setCurrentVideo(gameConfigurations[0][0].extract);
    }
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
        setButtonPositionArray(setButtonPosition());
        setIsLoading(false);
        console.warn("Is loading");
      })
      .catch((err) => console.error("Error in useEffect:", err));
  }, []);

  return (
    (isLoading && <h1> Is Loading</h1>) || (
      <div id="answerContainer">
        <header>
          <h1>Answers</h1>
          <div className="timer-wrapper">
            <CountdownCircleTimer
              isPlaying
              duration={diffusionDuration}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[
                diffusionDuration,
                diffusionDuration / 2,
                diffusionDuration / 3,
                0,
              ]}
              onComplete={() => [true, 1000]}
            >
              {RenderTime}
            </CountdownCircleTimer>
          </div>
        </header>
        <main>
          <div className="circlebg" />
          <div className="inputs">
            <div>
              <div className="navi">
                <StepNavigation
                  labelArray={labelArray}
                  currentStep={currentStep}
                  updateStep={updateStep}
                />
              </div>
              <div className="buttons">
                <Button
                  id="1"
                  type={`${
                    gameConfigurations[currentStep - 1][
                      buttonPositionArray[0][0] - 1
                    ].artist
                  } - ${
                    gameConfigurations[currentStep - 1][
                      buttonPositionArray[0][0] - 1
                    ].title
                  }`}
                  onClick={handleClick}
                  disabled={currentStep === labelArray.length}
                  selected={selected === "1" ? "buttonClicked" : "button"}
                />
                <Button
                  id="2"
                  type={`${
                    gameConfigurations[currentStep - 1][
                      buttonPositionArray[1][0] - 1
                    ].artist
                  } - ${
                    gameConfigurations[currentStep - 1][
                      buttonPositionArray[1][0] - 1
                    ].title
                  }`}
                  onClick={handleClick}
                  selected={selected === "2" ? "buttonClicked" : "button"}
                />
                <Button
                  id="3"
                  type={`${
                    gameConfigurations[currentStep - 1][
                      buttonPositionArray[2][0] - 1
                    ].artist
                  } - ${
                    gameConfigurations[currentStep - 1][
                      buttonPositionArray[2][0] - 1
                    ].title
                  }`}
                  onClick={handleClick}
                  selected={selected === "3" ? "buttonClicked" : "button"}
                />
                <Button
                  id="4"
                  type={`${
                    gameConfigurations[currentStep - 1][
                      buttonPositionArray[3][0] - 1
                    ].artist
                  } - ${
                    gameConfigurations[currentStep - 1][
                      buttonPositionArray[3][0] - 1
                    ].title
                  }`}
                  onClick={handleClick}
                  selected={selected === "4" ? "buttonClicked" : "button"}
                />
              </div>
            </div>
            <div className="btns">
              <div className="retry">
                <Link to="/answer">
                  <ButtonRetry />
                </Link>
              </div>
              <div className="btnhome">
                <Link to="/">
                  <ButtonHome />
                </Link>
              </div>
            </div>
          </div>
        </main>
        <footer>footer</footer>
        <LecteurMusic
          selectedDifficulty={selectedDifficulty}
          videoId={currentVideo}
          diffusionDuration={diffusionDuration}
          setDiffusionDurantion={setDiffusionDurantion}
        />
      </div>
    )
  );
}

export default Answer;
