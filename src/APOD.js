import React, { useState, useEffect } from "react";
import axios from "axios";

function APOD() {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=PRmAXLHghtb1zcgVykrd1oAikwKfrr7AsTKDkyEj`
      )
      .then((response) => setApod(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <p>{apod.copyright}</p>
      <img src={apod.url} />
      <p>{apod.explanation}</p>
    </div>
  );
}

export default APOD;
