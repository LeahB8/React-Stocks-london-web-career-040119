import React from 'react'


const Stock = ({stock, handleClick}) => (
  <div>
    <div className="card">
      <div className="card-body" onClick={handleClick} >
        <h5 className="card-title">{
          stock.name
          }</h5>
        <p className="card-text">{
            stock.ticker
          }</p>
          <p>
            $ {
              stock.price
            }
          </p>
          <p>
            {
              stock.type
            }
          </p>
      </div>
    </div>


  </div>
);

export default Stock
