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
import setUserAnswer from "../services/setUserAnswer";
import setButtonPosition from "../services/setButtonPosition";
import setStepBar from "../services/setStepBar";
import RenderTime from "../components/Timer";

function Answer({
  gameGenre,
  selectedDifficulty,
  diffusionDuration,
  setDiffusionDurantion,
  gameUserAnswer,
  setGameUserAnswer,
  gameConfigurations,
  setGameConfiguration,
}) {
  // Check loading component
  const [isLoading, setIsLoading] = useState(true);

  // Quand la musique youtube se lance
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [showButtonPlaying, setShowButtonPlaying] = useState(false);

  // Game configuration
  const [currentVideo, setCurrentVideo] = useState("");
  const [buttonPositionArray, setButtonPositionArray] = useState([]);
  // Etapes de la partie
  const [currentStep, updateCurrentStep] = useState(1);
  const [selected, setSelected] = useState(0);
  const [labelArray, setLabelArray] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ]);
  const updateStep = (step) => {
    setVideoPlaying(false);
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

    if (e.currentTarget.innerHTML.toString()) {
      setGameUserAnswer([
        ...gameUserAnswer,
        setUserAnswer(gameConfigurations, e, currentStep),
      ]);

      setLabelArray(setStepBar(labelArray, gameConfigurations, e, currentStep));
    }
  };

  // Ajout du premier id vidéo
  setTimeout(() => {
    if (currentVideo === "") {
      setCurrentVideo(gameConfigurations[0][0].extract);
    }
  }, "1000");

  // permet d'aller fetch mon api et d'initialiser le state "apiMusicList"
  useEffect(() => {
    const API = `https://api.elie-parthenay.fr/musics?genre=${gameGenre}`;
    axios
      .get(API)
      // Extract the DATA from the received response
      .then((res) => {
        setGameConfiguration(getMusics(res.data.results.musics));
        setButtonPositionArray(setButtonPosition());
        setIsLoading(false);
      })
      .catch((err) => console.error("Error in useEffect:", err));
  }, []);

  return (
    (isLoading && <h1> Is Loading</h1>) || (
      <div id="answerContainer">
        <header>
          <h1>Answers</h1>
          <div className="timer-wrapper">
            {videoPlaying ? (
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
                onComplete={() => {
                  setLabelArray(
                    setStepBar(labelArray, gameConfigurations, "", currentStep)
                  );
                  setShowButtonPlaying(false);
                  setTimeout(() => {
                    updateStep(currentStep + 1);
                  }, "3000");
                  [(true, 1000)]; // eslint-disable-line no-unused-expressions
                }}
              >
                {RenderTime}
              </CountdownCircleTimer>
            ) : (
              <div className="countdownLoading">Loading...</div>
            )}
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
                  gameUserAnswer={gameUserAnswer}
                  gameConfigurations={gameConfigurations}
                />
              </div>
              {videoPlaying && showButtonPlaying ? (
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
              ) : (
                false
              )}
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
        <LecteurMusic
          selectedDifficulty={selectedDifficulty}
          videoId={currentVideo}
          diffusionDuration={diffusionDuration}
          setDiffusionDurantion={setDiffusionDurantion}
          setVideoPlaying={setVideoPlaying}
          setShowButtonPlaying={setShowButtonPlaying}
        />
      </div>
    )
  );
}

export default Answer;
