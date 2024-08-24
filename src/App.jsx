import { useState, Suspense, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const resource = {
  data: null,
  promise: null,
};
async function fetchData(url) {
  // const url = "https://swapi.dev/api/people";

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
  throw resource.promise;
}
function useDataFetch(url) {
  const [data, setData] = useState(resource.data);

  useEffect(() => {
    if (!resource.promise) {
      fetchData(url);
    }

    let promise = resource.promise;

    promise
      .then((data) => setData(data))
      .catch((error) => {
        //take care of the error here
      });
  }, [url]);

  if (resource.data) {
    return data;
  } else {
    throw resource.promise;
  }
}
function App() {
  let data = useDataFetch("https://swapi.dev/api/people");
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
