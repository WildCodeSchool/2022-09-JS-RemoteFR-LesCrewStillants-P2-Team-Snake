import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import antho from "../assets/images/antho.png";
import anthounhappy from "../assets/images/anthounhappy.png";
import anthohappy from "../assets/images/anthohappy.png";
import anthony from "../assets/images/anthony.png";
import bulle from "../assets/images/bulle.png";
import ButtonHome from "../components/ButtonHome";
import ButtonRetry from "../components/ButtonRetry";

export default function Finish({ gameConfigurations }) {
  const [userResult, setUserResult] = useState([]);
  const [userResultScore, setUserResultSocre] = useState(0);
  const [avatarAnthony, setAvatarAnthony] = useState(antho);
  const [showModal, setShowModal] = useState(false);

  const avatar = (Score) => {
    if (Score <= 3) {
      return (
        <>
          <p className="sentence">bad</p>
          <img className="anthounhappy" src={anthounhappy} alt="antho" />
        </>
      );
    }
    if (Score <= 7 && Score > 3) {
      return (
        <>
          <p className="sentence">not bad</p>
          <img className="antho" src={anthounhappy} alt="antho" />
        </>
      );
    }
    return (
      <>
        <p className="sentence">Good</p>
        <img className="anthohappy" src={anthohappy} alt="antho" />
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
        <h1 className="bgimg">
          <img className="logo" alt="backgroundimage" src={logo} />
        </h1>
        <div className="headerelements">
          <h2 className="result">Results</h2>
          <img className="bulle" src={bulle} alt="bulle" />
          <p className="avatar">{avatar(userResultScore)}</p>
        </div>
      </header>
      <main>
        <div>
          <div className="scoreboard">
            <h1 className="score">
              Your score is : {userResultScore}/10, recap ➡️
            </h1>
            <div>
              <button
                className="buttonsb"
                type="button"
                onClick={() => setShowModal(!showModal)}
              >
                🧮
              </button>
            </div>
            <div>
              {showModal ? (
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <table className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-400 outline-none focus:outline-none flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
                      <tbody>
                        <tr>
                          <th>Step</th>
                          <th>Artist - Title</th>
                          <th>Your anwer</th>
                          <th>Result</th>
                        </tr>
                        {userResult.length > 0
                          ? gameConfigurations.map((step, index) => (
                              <tr>
                                <td>{index + 1}</td>
                                <td>{`${step[0].artist} - ${step[0].title}`}</td>
                                <td>{userResult[index].answer}</td>
                                <td>
                                  {userResult[index].goodAnswer ? "✅" : "❌"}
                                </td>
                              </tr>
                            ))
                          : false}
                      </tbody>

                      <button
                        className="button"
                        onClick={() => setShowModal(false)}
                        type="button"
                      >
                        <span>❌</span>
                      </button>
                    </table>
                  </div>
                </div>
              ) : null}
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
    </div>
  );
}
