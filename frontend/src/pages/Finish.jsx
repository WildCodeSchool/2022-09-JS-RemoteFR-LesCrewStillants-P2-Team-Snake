import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import antho from "../assets/images/antho.png";
import ButtonHome from "../components/ButtonHome";
import ButtonRetry from "../components/ButtonRetry";

export default function Finish({ gameConfigurations }) {
  const [userResult, setUserResult] = useState([]);
  const [userResultScore, setUserResultSocre] = useState(0);
  const [avatarAnthony, setAvatarAnthony] = useState(antho);

  const avatar = (Score) => {
    if (Score <= 3) {
      return (
        <>
          <p>bad</p>
          <img className="antho" src={antho} alt="antho" />
        </>
      );
    }
    if (Score <= 7 && Score > 3) {
      return (
        <>
          <p>not bad</p>
          <img className="antho" src={antho} alt="antho" />
        </>
      );
    }
    return (
      <>
        <p>Good</p>
        <img className="antho" src={antho} alt="antho" />
      </>
    );
  };

  useEffect(() => {
    setUserResultSocre(
      JSON.parse(localStorage.getItem("gameUserAnswer")).filter(
        (item) => item.goodAnswer === true
      ).length
    );
    setUserResult(JSON.parse(localStorage.getItem("gameUserAnswer")));
    if (gameConfigurations.length === 0) {
      window.location = "/";
    } else {
      setAvatarAnthony("antho");
    }
  }, []);

  return (
    <div id="finish">
      <header>
        <h1>
          <img className="logo" alt="backgroundimage" src={logo} />
        </h1>
        <h2 className="result">Results</h2>
        <p className="avatar">{avatar(userResultScore)}</p>
      </header>
      <main>
        <div>
          <div>
            <table className="scoreboard">
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Title - Artist</th>
                  <th>Your anwer</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {userResult.length > 0
                  ? gameConfigurations.map((step, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{`${step[0].artist} - ${step[0].title} - ${userResult[0].answer}`}</td>
                        <td>{userResult[index].answer}</td>
                        <td>{userResult[index].goodAnswer ? "✅" : "❌"}</td>
                      </tr>
                    ))
                  : false}
              </tbody>
            </table>
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
    </div>
  );
}
