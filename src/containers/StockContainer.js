import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    const { filter, stocks, buyStocks } = this.props;
    return (
      <div>
        <h2>Stocks</h2>
        {filter.map(stock => (
          <Stock
            key={stock.id}
            stock={stock}
            handleClick={() => buyStocks(stock)}
          />
        ))}
      </div>
    );
  }
}

export default StockContainer;
