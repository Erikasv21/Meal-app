import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "../styles/search.css";

const Search = ({ getQuery, changeFilter }) => {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <>
      <div className="search-container">
        <FormControl sx={{ width: "35ch" }} id="form-container">
          <TextField
            id="filled-basic"
            label="Search your meal!"
            variant="filled"
            autoComplete="off"
            value={text}
            onChange={(e) => onChange(e.target.value)}
          />
        </FormControl>
        <FormControl id="filter">
          <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Filter"
            value={"All"}
            onChange={changeFilter}
            sx={{ width: "15ch" }}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Vegetarian"}>Vegetarian</MenuItem>
            <MenuItem value={"Side"}>Side dish</MenuItem>
            <MenuItem value={"Miscellaneous"}>Miscellaneous</MenuItem>
            <MenuItem value={"Pasta"}>Pasta</MenuItem>
            <MenuItem value={"Dessert"}>Dessert</MenuItem>
            <MenuItem value={"Pork"}>Pork</MenuItem>
            <MenuItem value={"Beef"}>Beef</MenuItem>
            <MenuItem value={"Lamb"}>Lamb</MenuItem>
            <MenuItem value={"Seafood"}>Seafood</MenuItem>
            <MenuItem value={"Chicken"}>Chicken</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default Search;
