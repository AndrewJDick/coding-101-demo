import React from "react";
import ReactDOM from "react-dom";
import Logo from "./images/logo.png";
import Andrew from "./images/andrew.jpg";
import "./styles.css";

function App() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        maxWidth: "1400px",
        minWidth: "250px",
        width: "100%",
        margin: "0 auto"
      }}
    >
      {/* header */}
      <div
        style={{
          background: "#ffffff",
          height: "46px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 20px"
        }}
      >
        {/* logo */}
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "20px"
          }}
        />

        {/* profile */}
        <img
          src={Andrew}
          alt="Profile"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "20px"
          }}
        />
      </div>

      {/* title */}
      <h1
        style={{
          fontSize: "64px",
          marginTop: "20px",
          fontWeight: 300
        }}
      >
        Famous last words
      </h1>

      {/* card container*/}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto"
        }}
      >
        {/* card */}
        <div
          style={{
            position: "relative",
            backgroundColor: "white",
            maxWidth: "100%",
            margin: "20px 10px",
            padding: "18px 24px",
            border: "2px solid #e6ecf0",
            borderRadius: "5px",
            textAlign: "left",
            color: "#14171a",
            lineHeight: 1.25
          }}
        >
          <p>Mel</p>
          <p>Office Manager</p>
          <strong>Famous last words.... </strong>
          <em>
            Could you go into your settings on your new phone and tell me what
            your new model code is?
          </em>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
