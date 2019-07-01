import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";
import fetchStocks from "./Api";

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filter: []
  };

  getStocksApi = () => {
    fetchStocks().then(stocks =>
      this.setState({ stocks: stocks, filter: stocks })
    );
  };

  componentDidMount() {
    this.getStocksApi();
  }

  buyStocks = stock => {
    const { portfolio, stocks } = this.state;
    const myPortfolio = [...portfolio];
    const myStocks = stocks.filter(x => x.id === stock.id)[0];
    myPortfolio.push(myStocks);
    this.setState({ portfolio: myPortfolio });
  };

  sellStocks = stock => {
    const { portfolio } = this.state;
    const myPortfolio = [...portfolio];
    const newPortfolio = myPortfolio.filter(x => x.id !== stock.id);
    this.setState({ portfolio: newPortfolio });
  };

  sortByType = event => {
    const { stocks } = this.state;
    const stockType = event.target.value;
    const stockListCopy = [...stocks];
    const filteredStocksList = stockListCopy.filter(x => stockType === x.type);
    if (stockType === "All") {
      this.setState({ filter: stocks });
    } else {
      this.setState({ filter: filteredStocksList });
    }
  };

  sortAlphabetically = () => {
    const { stocks } = this.state;
    this.setState({
      stocks: stocks.sort((a, b) => a.name.localeCompare(b.name))
    });
  };

  sortByPrice = () => {
    const { stocks } = this.state;
    this.setState({ stocks: stocks.sort((a, b) => a.price - b.price) });
  };

  render() {
    const { filter, stocks, portfolio } = this.state;

    return (
      <div>
        <SearchBar
          sortByType={this.sortByType}
          sortAlphabetically={this.sortAlphabetically}
          sortByPrice={this.sortByPrice}
          filter={filter}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={stocks}
              buyStocks={this.buyStocks}
              filter={filter}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stocks={portfolio}
              sellStocks={this.sellStocks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
