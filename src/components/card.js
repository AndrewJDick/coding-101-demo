import React from "react";
import { string, any } from "prop-types";
import DefaultImage from "../images/default.jpg";
import "./card.styles.css";

export const Card = ({ name, position, avatar, content }) => (
  <div className="card">
    <img className="avatar" src={avatar} alt={name} />
    <p className="name">{name}</p>
    <p className="position">{position}</p>

    <div className="content">
      <p className="bold">Famous last words.... </p>
      <p className="italic">{content}</p>
    </div>
  </div>
);

Card.propTypes = {
  name: string,
  position: string,
  avatar: any,
  content: string
};

Card.defaultProps = {
  name: "Fathom Person",
  position: "Employee",
  avatar: DefaultImage,
  content:
    "Oh Andrew you so fine. You so fine you blow my mind. Hey Andrew! Hey Andrew!"
};
