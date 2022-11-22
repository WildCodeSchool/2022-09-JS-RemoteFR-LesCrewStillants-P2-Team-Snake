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
import updateStep from "../services/updateStep";
import setStepBar from "../services/setStepBar";
import RenderTime from "../components/Timer";

function Answer({
  diffusionDuration,
  setDiffusionDurantion,
  gameConfigurations,
  setGameConfiguration,
  currentStep,
  updateCurrentStep,
}) {
  // Check loading component
  const [isLoading, setIsLoading] = useState(true);

  // Détermine si la musique doit être diffusée ou non
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Affiche les bouton lorsque la musique est lancée et les désaffiche lorsque qu'elle est arretée
  const [showButtonPlaying, setShowButtonPlaying] = useState(false);

  // Id de la vidéo youtube correspondante à l'étape actuelle
  const [currentVideo, setCurrentVideo] = useState("");

  // Position des bouton à afficher à l'utilisateur pour le choix des réponses à chaque étapes
  const [buttonPositionArray, setButtonPositionArray] = useState([]);

  // Stock l'id du bouton cliqué pour changer son style et donner un effect enfoncé
  const [selected, setSelected] = useState(0);

  // Tableau initial des 10 étapes de la partie
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

  // Lorque l'utilisateur clique sur une réponse
  const handleClick = (e) => {
    /*
     * DEBUG TOTAL
     */

    console.warn("****** DEBUG *****");
    console.warn("=== gameConfiguration ===");
    console.warn(gameConfigurations);
    console.warn("=== currentVideo ===");
    console.warn(currentVideo);
    console.warn("=== userAnswer ===");
    console.warn(JSON.parse(localStorage.getItem("gameUserAnswer")));
    console.warn("****** END DEBUG *****");

    /*
     * END DEBUG TOTAL
     */

    // La musique s'arrete
    setVideoPlaying(false);

    // Passage à l'étape suivante, modification de l'id vidéo & changement de la progress bar
    updateStep(
      currentStep + 1,
      updateCurrentStep,
      setCurrentVideo,
      setButtonPositionArray,
      gameConfigurations,
      setButtonPosition
    );

    // Si nous avons bien un event sur le bouton cliqué, alors nous modifion le state
    if (e !== "") {
      setSelected(e.currentTarget.id);
    }
    if (e === "" || e.currentTarget.innerHTML.toString()) {
      setUserAnswer(gameConfigurations, e, currentStep);
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
    // Supression de l'ancien tableau résultat user localstorage
    localStorage.removeItem("gameUserAnswer");

    const API = `https://api.elie-parthenay.fr/musics?genre=${JSON.parse(
      localStorage.getItem("userGenre")
    )}`;
    axios
      .get(API)
      // Extract the DATA from the received response
      .then((res) => {
        const gameConfigurationInit = getMusics(res.data.results.musics);
        setGameConfiguration(gameConfigurationInit);
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

          {videoPlaying ? (
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
                onComplete={() => {
                  setLabelArray(
                    setStepBar(labelArray, gameConfigurations, "", currentStep)
                  );
                  setShowButtonPlaying(false);
                  setTimeout(() => {
                    handleClick("");
                  }, "3000");
                  [(true, 1000)]; // eslint-disable-line no-unused-expressions
                }}
              >
                {RenderTime}
              </CountdownCircleTimer>
            </div>
          ) : (
            <div className="countdownLoading">Loading...</div>
          )}
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
