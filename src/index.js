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
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
