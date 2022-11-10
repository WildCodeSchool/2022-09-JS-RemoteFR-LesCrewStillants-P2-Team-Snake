import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import antho from "../assets/images/antho.png";
import Button from "../components/Btn";
import StartButton from "../components/StartButton";
import "../App.css";

export default function Home(props) {

  const [showModal, setShowModal] = React.useState(false);
  const { selectedDifficulty, selectedGenre, userPseudo, changePseudo, handleClickDifficulty, handleClickGenre, showDifficulty } = props;



  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Règle du jeu</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                    type="button"
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* body */}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perspiciatis nisi reprehenderit saepe tenetur, perferendis
                    eligendi quae esse similique voluptas illo animi distinctio
                    inventore modi laudantium accusantium recusandae atque optio
                    numquam.
                  </p>
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
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
          <input type="text" placeHolder="Pseudo" onChange={changePseudo} />
          <div>
            {showDifficulty ? (
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
            ) : (
              false
            )}
            {selectedDifficulty && showDifficulty ? (
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
              </div>
            ) : (
              false
            )}
          </div>
          {selectedGenre && selectedDifficulty && showDifficulty ? (
            <div>
              <Link to="/answer">
                <StartButton id="7" className="startGame" />
              </Link>
            </div>
          ) : (
            false
          )}
          <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Rules
          </button>
        </div>
      </main>
      <footer>footer</footer>
    </>
  );
}
