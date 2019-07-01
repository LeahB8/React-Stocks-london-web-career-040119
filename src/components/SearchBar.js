import React from "react";

const SearchBar = props => {
  return (
    <div>
      <strong>Sort by:</strong>
      <br />
      <div>
        <label>
          <input
            name="stock"
            type="radio"
            value="Alphabetically"
            onChange={props.sortAlphabetically}
          />
          Alphabetically
        </label>
        <br />

        <label>
          <input
            name="stock"
            type="radio"
            value="Price"
            onChange={props.sortByPrice}
          />
          Price
        </label>
        <br />
      </div>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.sortByType}>
          <option value="All">All Stocks</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
