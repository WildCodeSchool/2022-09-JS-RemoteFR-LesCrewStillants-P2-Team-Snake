import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import anthounhappy from "../assets/images/anthounhappy.png";
import anthohappy from "../assets/images/anthohappy.png";
import anthony from "../assets/images/anthony.png";
import ButtonHome from "../components/ButtonHome";
import ButtonRetry from "../components/ButtonRetry";
import StepNavigation from "../components/StepNavigation";

export default function Finish({ gameConfigurations }) {
  const [userResult, setUserResult] = useState([]);
  const [userResultScore, setUserResultSocre] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const currentStep = 11;

  const [labelArray, setLabelArray] = useState([]);

  const avatar = (Score) => {
    if (Score <= 3) {
      return <img className="anthounhappy" src={anthounhappy} alt="antho" />;
    }
    if (Score <= 7 && Score > 3) {
      return <img className="antho" src={anthony} alt="antho" />;
    }
    return <img className="anthohappy" src={anthohappy} alt="antho" />;
  };

  useEffect(() => {
    // Si le state gameConfiguration est renseigné alors je le stock dans le localstorage
    if (gameConfigurations.length > 0) {
      localStorage.setItem(
        "gameConfigurations",
        JSON.stringify(gameConfigurations)
      );
    }

    if (localStorage.getItem("gameUserAnswer") === null) {
      window.location = "/";
    } else {
      const prepareArrayLabel = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 10; i++) {
        if (
          JSON.parse(localStorage.getItem("gameUserAnswer"))[i].goodAnswer ===
          true
        ) {
          prepareArrayLabel.push("✅");
        } else {
          prepareArrayLabel.push("❌");
        }
      }
      setLabelArray(prepareArrayLabel);
      // Calcule des bonnes réponse et stock dans le state
      const userFinalScore = JSON.parse(
        localStorage.getItem("gameUserAnswer")
      ).filter((item) => item.goodAnswer === true).length;
      setUserResultSocre(userFinalScore);

      // Récupération des infos de la partie et stock dans le state
      setUserResult(JSON.parse(localStorage.getItem("gameUserAnswer")));

      switch (userFinalScore) {
        case 1:
          setMessage("Very bad !");
          break;
        case 2:
          setMessage("Try again !");
          break;
        case 3:
          setMessage("You can do better !");
          break;
        case 4:
          setMessage("One more effort !");
          break;
        case 5:
          setMessage("Not bad !");
          break;
        case 6:
          setMessage("Good job !");
          break;
        case 7:
          setMessage("Good score !");
          break;
        case 8:
          setMessage("Well done !");
          break;
        case 9:
          setMessage("Almost perfect !");
          break;
        case 10:
          setMessage("Masterclass !");
          break;
        default:
          setMessage("I'm crying inside !");
      }
    }
  }, []);

  return (
    <div id="finish">
      <header>
        <h1 className="bgimg">
          <img className="logo" alt="backgroundimage" src={logo} />
        </h1>
        <div className="headerelements">
          <p className="avatar">{avatar(userResultScore)}</p>
          <div className="bulle">
            <p>{message}</p>
          </div>
        </div>
      </header>
      <main>
        <div>
          <div className="scoreboard">
            <div className="navi navi-finish">
              <StepNavigation
                labelArray={labelArray}
                currentStep={currentStep}
              />
            </div>
            <h1 className="score">Score : {userResultScore}/10</h1>
            <div>
              <button
                className="buttonSummary"
                type="button"
                onClick={() => setShowModal(!showModal)}
              >
                Your answers
              </button>
            </div>
            <div>
              {showModal ? (
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl resultBg ">
                    <table className="resultTable flex flex-col w-full p-5 items-center">
                      <tbody>
                        <tr>
                          <th>Step</th>
                          <th>Your answer</th>
                          <th>Good Answer</th>
                        </tr>
                        {userResult.length > 0
                          ? JSON.parse(
                              localStorage.getItem("gameConfigurations")
                            ).map((step, index) => (
                              <tr
                                className={
                                  userResult[index].goodAnswer
                                    ? "resultTableWin"
                                    : "resultTableLoose"
                                }
                              >
                                <td className="font-bold">{index + 1}</td>
                                <td>{userResult[index].answer}</td>
                                <td>{`${step[0].artist} - ${step[0].title}`}</td>
                              </tr>
                            ))
                          : false}
                      </tbody>
                      <button
                        className="buttonSummary mt-2"
                        onClick={() => setShowModal(false)}
                        type="button"
                      >
                        <span>Close</span>
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
