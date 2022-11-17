import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import antho from "../assets/images/antho.png";
import ButtonHome from "../components/ButtonHome";
import ButtonRetry from "../components/ButtonRetry";

export default function Finish() {
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
          <h3>Résultat</h3>
          <p>Votre score points</p>
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
