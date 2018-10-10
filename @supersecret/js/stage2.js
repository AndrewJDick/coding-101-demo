import React from "react";
import ReactDOM from "react-dom";
import Logo from "./images/logo.png";
import Andrew from "./images/andrew.jpg";

import Mel from "./images/mel.jpg";
import Preete from "./images/preete.jpg";
import Sara from "./images/sara.jpg";
import Pete from "./images/pete.jpg";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="header__icon" src={Logo} alt="Logo" />
        <img className="header__profile" src={Andrew} alt="alt" />
      </div>

      <h1 className="title__icon">☠</h1>
      <h1 className="title__text">Famous last words</h1>

      <div className="container">
        <div className="card">
          <img className="card__avatar" src={Mel} alt="Mel" />
          <p className="card__name">Mel</p>
          <p className="card__position">Office Manager</p>

          <div className="card__content">
            <p className="bold">Famous last words.... </p>
            <p className="italic">
              Could you go into your settings on your new phone and tell me what
              your new model code is?
            </p>
          </div>
        </div>

        <div className="card">
          <img className="card__avatar" src={Preete} alt="Preete" />
          <p className="card__name">Preete</p>
          <p className="card__position">Head of Finance</p>

          <div className="card__content">
            <p className="bold">Famous last words.... </p>
            <p className="italic">
              Please remember time-sheets should be completed daily. (Ben wants
              to add prick but I wont do that!)
            </p>
          </div>
        </div>

        <div className="card">
          <img className="card__avatar" src={Sara} alt="Sara" />
          <p className="card__name">Sara</p>
          <p className="card__position">Head of People</p>

          <div className="card__content">
            <p className="bold">Famous last words.... </p>
            <p className="italic">How are your tangerine peeling skills?</p>
          </div>
        </div>

        <div className="card">
          <img className="card__avatar" src={Pete} alt="Pete" />
          <p className="card__name">Pete</p>
          <p className="card__position">Head of Lead Developers</p>

          <div className="card__content">
            <p className="bold">Famous last words.... </p>
            <p className="italic">@andrewjdick kiiiiiilllllinnngggg iittttt</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
