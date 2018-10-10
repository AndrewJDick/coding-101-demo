import React from "react";
import ReactDOM from "react-dom";
import Logo from "./images/logo.png";
import Andrew from "./images/andrew.jpg";

import { Card } from "./components/card";
import { FathomCoolPeople, FathomPeople } from "./content/people";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="header__icon" src={Logo} alt="Fathom Logo" />
        <img className="header__profile" src={Andrew} alt="Profile" />
      </div>

      <h1 className="title__icon">☠</h1>
      <h1 className="title__text">Famous last words</h1>

      <div className="container">
        {FathomCoolPeople.map(person => {
          const { name, position, avatar, content } = person;
          return (
            <Card
              name={name}
              position={position}
              avatar={avatar}
              content={content}
            />
          );
        })}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
