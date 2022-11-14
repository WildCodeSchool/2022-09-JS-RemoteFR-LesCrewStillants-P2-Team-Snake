import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../components/Btn";
import StepNavigation from "../components/StepNavigation";
import ButtonHome from "../components/ButtonHome";
import ButtonRetry from "../components/ButtonRetry";
import "../assets/styles/App.css";
import "../assets/styles/Step_progress.css";

function Answer(props) {
  // Récupération de la configuration de la partie
  const { selectedDifficulty, selectedGenre, userPseudo } = props;
  console.warn(
    `Pseudo: ${userPseudo} Difficulty: ${selectedDifficulty} Genre: ${selectedGenre} `
  );

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
  const [currentStep, updateCurrentStep] = useState(1);

  const updateStep = (step) => {
    updateCurrentStep(step);
  };

  const [selected, setSelected] = useState();

  const handleClick = (e) => {
    setSelected(e.currentTarget.id);
    updateStep(currentStep + 1);
  };

  const [fakeButton1, setFakeButton1] = useState();
  const [fakeButton2, setFakeButton2] = useState();
  const [fakeButton3, setFakeButton3] = useState();
  const [fakeButton4, setFakeButton4] = useState();

  axios
    .get("https://api.elie-parthenay.fr/musics")
    // Extract the DATA from the received response
    .then((response) => response.data)
    // Use this data to update the state
    .then((data) => {
      setFakeButton1(
        `${data.results.musics[2].title} - ${data.results.musics[2].artist}`
      );
      setFakeButton2(
        `${data.results.musics[3].title} - ${data.results.musics[3].artist}`
      );
      setFakeButton3(
        `${data.results.musics[4].title} - ${data.results.musics[4].artist}`
      );
      setFakeButton4(
        `${data.results.musics[5].title} - ${data.results.musics[5].artist}`
      );
      console.warn(data.results.musics[2].title);
    });

  return (
    <>
      <header>
        <h1>Answer</h1>;
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
                type={fakeButton1}
                onClick={handleClick}
                disabled={currentStep === labelArray.length}
                selected={selected === "1" ? "buttonClicked" : "button"}
              />
              <Button
                id="2"
                type={fakeButton2}
                onClick={handleClick}
                selected={selected === "2" ? "buttonClicked" : "button"}
              />
              <Button
                id="3"
                type={fakeButton3}
                onClick={handleClick}
                selected={selected === "3" ? "buttonClicked" : "button"}
              />
              <Button
                id="4"
                type={fakeButton4}
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
    </>
  );
}

export default Answer;
