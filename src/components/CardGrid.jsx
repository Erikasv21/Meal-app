import React from "react";
import CardItem from "./CardItem";
import "../styles/cardgrid.css";

const CardGrid = ({ meal, filter }) => {
  if (meal) {
    return (
      <>
        <div className="grid-container">
          {meal.map((item) => (
            <CardItem key={item.idMeal} item={item} filter={filter} />
          ))}
        </div>
      </>
    );
  }
};

export default CardGrid;
