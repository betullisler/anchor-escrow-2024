import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <div className="page-content"></div>
    </>
  );
}

export default App;
