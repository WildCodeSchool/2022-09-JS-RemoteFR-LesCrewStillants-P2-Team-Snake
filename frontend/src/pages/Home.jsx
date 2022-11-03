import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import antho from "../assets/antho.png";
import Button from "../components/Button";
import "../App.css";
import StartButton from "../components/StartButton";

export default function Home() {
  const [selectedDifficulty, setSelectedDifficulty] = useState();
  const [selectedGenre, setSelectedGenre] = useState();

  const handleClickDifficulty = (e) => {
    setSelectedDifficulty(e.currentTarget.id);
  };

  const handleClickGenre = (e) => {
    setSelectedGenre(e.currentTarget.id);
  };

  return (
    <>
      <header>
        <h1>
          <img className="logo" alt="backgroundimage" src={logo} />
        </h1>
        <h2>
          <img className="antho" alt="avatar formateur" src={antho} />
        </h2>
      </header>
      <main>
        <div>
          <input type="text" placeHolder="Pseudo" />
          <div>
            <div className="buttons">
              <Button
                id="1"
                type="Easy"
                onClick={handleClickDifficulty}
                selected={
                  selectedDifficulty === "1" ? "buttonClicked" : "button"
                }
              />
              <Button
                id="2"
                type="Normal"
                onClick={handleClickDifficulty}
                selected={
                  selectedDifficulty === "2" ? "buttonClicked" : "button"
                }
              />
              <Button
                id="3"
                type="Hard"
                onClick={handleClickDifficulty}
                selected={
                  selectedDifficulty === "3" ? "buttonClicked" : "button"
                }
              />
            </div>
            <div className="buttons">
              <Button
                id="4"
                type="Rock"
                onClick={handleClickGenre}
                selected={selectedGenre === "4" ? "buttonClicked" : "button"}
              />
              <Button
                id="5"
                type="Rap"
                onClick={handleClickGenre}
                selected={selectedGenre === "5" ? "buttonClicked" : "button"}
              />
              <Button
                id="6"
                type="80s"
                onClick={handleClickGenre}
                selected={selectedGenre === "6" ? "buttonClicked" : "button"}
              />
              <Link to="/answer">
                <StartButton id="7" className="startGame" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer>footer</footer>
    </>
  );
}
