import React, { Component } from "react";

const API = "http://localhost:4000/stocks";

const fetchStocks = () => {
  return fetch(API).then(resp => resp.json());
};

export default fetchStocks;
