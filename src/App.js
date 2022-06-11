import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Main from "./pages/Main";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  const [meal, setMeal] = useState([]);
  const [query, setQuery] = useState();

  // Fetching data whats inside the input field
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      setMeal(result.data.meals);
      // console.log(result.data.meals);
    };

    fetchData();
  }, [query]);

  // Fetching all data to get straight in webpage
  useEffect(() => {
    const fetchDataInstant = async () => {
      const now = await axios(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );

      setMeal(now.data.meals);
    };
    fetchDataInstant();
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Main meal={meal} getQuery={(q) => setQuery(q)} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
