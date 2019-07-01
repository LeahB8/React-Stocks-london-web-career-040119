import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    const { stocks, sellStocks } = this.props;

    return (
      <div>
        <h2>My Portfolio</h2>
        {stocks.map(stock => (
          <Stock
            key={"p" + stock.id}
            stock={stock}
            handleClick={() => sellStocks(stock)}
          />
        ))}
      </div>
    );
  }
}

export default PortfolioContainer;
