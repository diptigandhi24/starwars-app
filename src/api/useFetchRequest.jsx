import { useState, useEffect } from "react";

export function fetchData(url) {
  let data;
  fetch(url)
    .then((response) => response.json())
    .then((json) => (data = json));
  return data;
}

export default function useFetchEverypage() {
  const [nextPage, setNextPage] = useState(
    "https://swapi.dev/api/people/?page"
  );
  const [data, setData] = useState("");
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    if (nextPage !== null) {
      const fetchData = async (nextPage) => {
        const response = await fetch(nextPage);
        console.log("before link", nextPage);
        const json = await response.json();
        console.log("next link", json, json.next);
        setData((prevState) => {
          if (prevState === "") {
            return json.results;
          } else {
            let temp = [...prevState, ...json.results];
            return temp;
          }
        });
        isloading === true ? setIsloading(false) : null;
        setNextPage(() => {
          let next = json.next;
          return next;
        });
      };
      fetchData(nextPage);
    }
  }, [nextPage]);
  return { data, isloading };
}
