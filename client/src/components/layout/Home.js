import React from "react";

//Components
import PopularMovie from "./../movies/PopularMovie";
import SearchBar from "./../movies/SearchBar";
import MoviesGrid from "./../movies/MoviesGrid";
import LoadMoreButton from "./../movies/LoadMoreButton";
import Spinner from "./Spinner";

const Home = () => {
  return (
    <>
      <PopularMovie />
      <SearchBar />
      <MoviesGrid />
      <LoadMoreButton />
      <Spinner />
    </>
  );
};

export default Home;
