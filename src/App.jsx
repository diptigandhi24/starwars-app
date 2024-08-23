import { useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const resource = {
  data: null,
  promise: null,
};
function useFetch() {
  const url = "https://swapi.dev/api/people";

  resource.promise = fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log("received a data", data);
      resource.data = data;
    });

  if (resource.data) {
    return resource.data;
  } else {
    throw resource.promise;
  }
}

function App() {
  let data = useFetch();
  console.log("Data from the custom hook", data);
  return (
    <>
      <Suspense fallback="Loading...">
        <h1>Hello Suspense</h1>
        <p>{data.count}</p>
      </Suspense>
    </>
  );
}

export default App;
