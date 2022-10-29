import React from 'react';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';
import Header from './components/Header';
import "./App.css";
import { WatchListContextProvider } from './context/watchListContext';

export const App = () => {
    return (
        <div className="container">
            <WatchListContextProvider>
            <BrowserRouter>
            <Header />
            <Routes>
            <Route exact path="/" element={<CoinSummaryPage />} />
            <Route path="/coins/:id" element={<CoinDetailPage />} />
            </Routes>
            </BrowserRouter>
            </WatchListContextProvider>
        </div>
    );
};

export default App;