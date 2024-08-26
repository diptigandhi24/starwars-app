// const url = "https://swapi.dev/api/people";
import { useState, Suspense, useEffect, lazy } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DisplayCharacterList from "./components/DisplayCharactersList";

function App() {
  return (
    <>
      <p>Hello Suspense</p>
      <DisplayCharacterList />
      <progress
        style={{
          position: "sticky",
          bottom: 0,
        }}
        value={null}
      />
    </>
  );
}

export default App;
