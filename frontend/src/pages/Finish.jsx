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
  const [showModal, setShowModal] = useState(false);

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
    <>
      <header>
        <h1>
          <img className="logo" alt="backgroundimage" src={logo} />
        </h1>
        <h2>
          <img className="antho" alt="avatar formateur" src={avatarAnthony} />
        </h2>
      </header>
      <main>
        <div>
          <h3>Résultat</h3>
          <p>Votre score points: {userResultScore} / 10 </p>
          <div>
            <button type="button" onClick={() => setShowModal(!showModal)}>
              Game recap
            </button>
            <div>
              {showModal ? (
                <div>
                  <div>
                    <table>
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
                                <td>
                                  {userResult[index].goodAnswer ? "✅" : "❌"}
                                </td>
                              </tr>
                            ))
                          : false}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}
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
