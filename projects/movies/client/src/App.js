import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";

// Components
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

const App = () => {
  const [search, setSearch] = useState("");
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);

  // callback sent down to the search bar to get the users search criteria
  const fetchResources = (searchQuery) => {
    setSearch(searchQuery);
  };

  // utility function to fetch data
  const fetchMovies = async (endpoint) => {
    setLoading(true);
    try {
      const result = await fetch(endpoint);
      const data = await result.json();
      setState({
        movies: [data.results],
      });
      console.log(state.movies[0]);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  // run on initial render and anytime ONLY a new request is sent - so the dependency for this to run again is when the search criteria changes so pass that into dep. array
  useEffect(() => {
    const endpoint = `/api/${search.length === 0 ? "marvel" : search}`;
    fetchMovies(endpoint);
  }, [search]);

  //console.log(state.movies);
  return (
    <div className="App">
      <SearchBar returnSearch={fetchResources} />
      {/* render a spinner on load - load state is true during fetch all the way till the data is returned, useEffect re-renders and then the movies render */}
      {loading ? (
        <div className="text-center" style={{ marginTop: "37.4vh" }}>
          <Spinner style={{ width: "6rem", height: "6rem" }} />
        </div>
      ) : (
        <MovieList movieList={state.movies[0]} />
      )}
    </div>
  );
};

export default App;
