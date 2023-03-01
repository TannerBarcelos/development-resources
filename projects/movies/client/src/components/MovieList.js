import React from "react";

// card
import MovieCard from "./MovieCard";

function MovieList({ movieList }) {
  return !movieList ? null : (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {/* Map out MovieCards for each movie returned from the query */}
      {movieList.map(({ id, title, vote_average, poster_path, overview }) => {
        return (
          <MovieCard
            key={id}
            id={id}
            title={title}
            vote_average={vote_average}
            poster_path={poster_path}
            overview={overview}
          />
        );
      })}
    </div>
  );
}

export default MovieList;
