import React, { useState, useEffect } from "react";
import CardGrid from "../components/CardGrid";
import Search from "../components/Search";
import LoadingScreen from "../components/LoadingScreen";

const Main = ({ meal, getQuery, filter, setFilter }) => {
  const [isLoading, setIsLoading] = useState(true);

  const changeFilter = (e) => {
    setFilter(e.target.value);
    // console.log(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      <Search
        getQuery={getQuery}
        meal={meal}
        changeFilter={changeFilter}
        filter={filter}
      />
      {isLoading === false ? (
        <CardGrid meal={meal} filter={filter} />
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Main;
