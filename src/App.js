import React from "react";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Data from "./data.js";
import "./style.css";

export default function App() {
  const places = Data.map((data) => <Main key={data.id} place={data} />);
  return (
    <div className="container">
      <Navbar />
      {places}
    </div>
  );
}
