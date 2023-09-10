import React from "react";
import Watchedmovieli from "./Watchedmovieli";

function Watchedmovielist({ watched, handleDeletMovie }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <Watchedmovieli
          movie={movie}
          key={movie.imdbID}
          handleDeletMovie={handleDeletMovie}
        />
      ))}
    </ul>
  );
}

export default Watchedmovielist;
