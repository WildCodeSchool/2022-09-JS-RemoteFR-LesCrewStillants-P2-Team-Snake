import Home from "./pages/Home";
import Button from "./components/button"
import React, { useState } from "react";
import styles from './App.css';

import "./App.css";

function App() {

  const [selected, setSelected] = useState();

  const handleClick = (e) => {
    setSelected(e.currentTarget.id)
  };

  return (
    <div className="App">
      <Home />
      <Button
        id="1"
        type={'Easy'}
        onClick={handleClick}
        className={
          selected !== '1' ? `${styles.button}` : `${styles.buttonClicked}`
        }
      />
      <Button
        id="2"
        type={'Normal'}
        onClick={handleClick}
        className={
          selected !== '2' ? `${styles.button}` : `${styles.buttonClicked}`
        }
      />
      <Button
        id="3"
        type={'Hard'}
        onClick={handleClick}
        className={
          selected !== '3' ? `${styles.button}` : `${styles.buttonClicked}`
        }/>
      <p>coucou</p>
      <Button
        id="4"
        type={'Rock'}
        onClick={handleClick}
        className={
          selected !== '4' ? `${styles.button}` : `${styles.buttonClicked}`
        }
      />
      <Button
        id="5"
        type={'Rap'}
        onClick={handleClick}
        className={
          selected !== '5' ? `${styles.button}` : `${styles.buttonClicked}`
        }
      />
      <Button
        id="6"
        type={'80s'}
        onClick={handleClick}
        className={
          selected !== '6' ? `${styles.button}` : `${styles.buttonClicked}`
        }/>
    </div>
  );
}

export default App;
