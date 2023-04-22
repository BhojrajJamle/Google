import { useState, useEffect } from "react";
import API_KEY from "../pages/chunk/main.chunk";

const CONTEXT_KEY = "b1fd28e3dc0715af7";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const featchData = async () => {
      const res = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      );
      // .then((response) => response.json())
      // .then((result) => setData(result));

      const result = await res.json();

      setData(result);
    };

    featchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
