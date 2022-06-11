import React, { useState, useEffect } from "react";
import CardGrid from "../components/CardGrid";

import Search from "../components/Search";
import LoadingScreen from "../components/LoadingScreen";
import axios from "axios";

const Main = ({ meal, getQuery }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const filterFetch = async () => {
      const filterResult =
        await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}
      `);
      setFilter(filterResult.data.value);
      console.log(filterResult.data);
    };
    filterFetch();
  }, [filter]);

  const changeFilter = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      <Search getQuery={getQuery} meal={meal} changeFilter={changeFilter} />
      {isLoading === false ? (
        <CardGrid meal={meal} filter={filter} />
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Main;
