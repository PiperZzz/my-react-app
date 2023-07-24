import React, { useState, useEffect } from 'react';
import CryptoChart from './CryptoChart';
import { mockPriceData, mockUserData } from './API'; 

function TradingApp() {
    const [priceData, setPriceData] = useState([]);
    const [latestPrice, setLatestPrice] = useState(null);
    const [balance, setBalance] = useState(mockUserData.balance);
    const [btc, setBtc] = useState(mockUserData.holdings.BTC);
    useEffect(() => {
        setPriceData(mockPriceData);
        setLatestPrice(mockPriceData[mockPriceData.length - 1].value);
    }, []);

    const handleBuy = () => {
        const amountToBuy = balance / latestPrice;
        setBalance(0);
        setBtc(btc + amountToBuy);
    };

    const handleSell = () => {
        const amountToSell = btc;
        setBalance(balance + amountToSell * latestPrice);
        setBtc(0);
    };

    return (
        <div>
            <CryptoChart data={priceData} />
            <input type="text" value={latestPrice || ''} readOnly />
            <button onClick={handleBuy}>Buy</button>
            <button onClick={handleSell}>Sell</button>
            <div>
                Balance: {balance.toFixed(2)} USD
            </div>
            <div>
                BTC: {btc.toFixed(8)}
            </div>
        </div>
    );
}

export default TradingApp;