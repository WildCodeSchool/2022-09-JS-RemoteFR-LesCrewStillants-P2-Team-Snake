import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ButtonHome from "../components/ButtonHome";
import ButtonRetry from "../components/ButtonRetry";
import "../App.css";

function Answer() {
  const [selected, setSelected] = useState();

  const handleClick = (e) => {
    setSelected(e.currentTarget.id);
  };

  return (
    <>
      <header>
        <h1>Answer</h1>;
      </header>
      <main>
        <div>
          <div className="buttons">
            <Button
              id="1"
              type="Réponse 1"
              onClick={handleClick}
              selected={selected === "1" ? "buttonClicked" : "button"}
            />
            <Button
              id="2"
              type="Réponse 2"
              onClick={handleClick}
              selected={selected === "2" ? "buttonClicked" : "button"}
            />
            <Button
              id="3"
              type="Réponse 3"
              onClick={handleClick}
              selected={selected === "3" ? "buttonClicked" : "button"}
            />
            <Button
              id="4"
              type="Réponse 4"
              onClick={handleClick}
              selected={selected === "4" ? "buttonClicked" : "button"}
            />
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
