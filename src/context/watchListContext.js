import React, { createContext, useEffect, useState } from "react";


export const WatchListContext = createContext();

export const WatchListContextProvider = props => {
    console.log();
    const [watchList, setWatchList] = useState( localStorage.getItem("watchList") ? localStorage.getItem("watchList").split(",") : ["bitcoin", "ethereum", "cosmos"])



    useEffect(() => {
        localStorage.setItem("watchList", watchList);
    }, [watchList]);   


    const addCoin = coin => {
        if (watchList.indexOf(coin) === -1) {
            setWatchList([...watchList, coin])
        }
    }

    const deleteCoin = (coin) => { 
        setWatchList(watchList.filter(el => {
            return el !== coin;
        }))
    };

    return (
        <WatchListContext.Provider value={{watchList, deleteCoin, addCoin}}>
         {props.children  }
        </WatchListContext.Provider>
    )
}