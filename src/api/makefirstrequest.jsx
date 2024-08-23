import { useState, useEffect } from "react";

// this request is happening on the client side and on initial load
// let url = "https://swapi.dev/api/people";

function test(promise) {
  console.log("usetest", promise);
  if (promise.status === "fulfilled") {
    console.log("Fullfilled", promise.status, promise);
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    console.log("Pending case", promise.status, promise);
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result) => {
        promise.status = "fulfilled";
        console.log("Inside then", promise.status);
        promise.value = result;
      },
      (reason) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );

    throw promise;
  }
}

function fetchPromiseObject(url) {
  let promiseObject = fetch(url);
  console.log("Fetch is getting called everytime");
  return promiseObject;
}

function Fetch(url) {
  let data = test(fetchPromiseObject(url));
  console.log("useFetch is called", data.status);

  return data;
}

export default function SuspenseComponent() {
  const data = Fetch("http://localhost:5173/");

  return <>{<p>the data received is {data.count}</p>}</>;
}
