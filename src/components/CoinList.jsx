import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchListContext';
import Coin from './coin';

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const {watchList, deleteCoin} = useContext(WatchListContext);
    const [isLoading, setIsLoading] = useState(false);  

    console.log(watchList);
    useEffect(() => {
        const fetchData = async  () => {
            setIsLoading(true)
        const response = await coinGecko.get("/coins/markets", {
            params: {
                vs_currency: "usd",
                ids: watchList.join(","),
             }, 
        });
        setCoins(response.data)
        setIsLoading(false)
        };
        
        if (watchList.length > 0) {
            fetchData();
        } else setCoins([]);
        

    }, [watchList]);

    const renderCoins = () => {
         if(isLoading) {
            return <div>Loading...</div>
         }
         return (
            <ul className="coinList list-group mt-2">
                {coins.map(coin => {
                   return <Coin key={coin.id} coin={coin} deleteCoin= {deleteCoin} />
                })}
            </ul>

         )
    }




  return (
    <div>
        {renderCoins()}
    </div>
  )
}

export default CoinList