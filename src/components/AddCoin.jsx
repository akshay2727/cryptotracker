import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { WatchListContext } from '../context/watchListContext';

const AddCoin = () => {

const [isActive, setIsActive] = useState(false);
const {addCoin} = useContext(WatchListContext);

  const availableCoins = [
    "bitcoin",
    "ethereum",
    "ripple",
    "tether",
    "eos",
    "cosmos",
    "okb",
    "tezos",
    "cardano",
  ];

  const handleClick = (coin) => {
    addCoin(coin);
     
  }


  return (
    <div className="dropdown">
      <button onClick={() => setIsActive(!isActive)} className="btn btn-primary droptdown-toggle" type="button">
      Add Coin
      </button>
      <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
       { availableCoins.map((el) => {
        return (
          <a onClick={() => handleClick(el)} href="#" className="dropdown-item">{el}</a>
        );
       }
        )}
      </div>
        
    </div>
  )
}

export default AddCoin