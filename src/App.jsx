import { useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SuspenseComponent from "./api/makefirstrequest.jsx";
function App() {
  //   const data = useFetch("https://swapi.dev/api/people");

  return (
    <>
      <Suspense fallback="Loading...">
        <SuspenseComponent />
      </Suspense>
    </>
  );
}

export default App;
