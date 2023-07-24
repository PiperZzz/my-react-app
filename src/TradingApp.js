import React, { useState, useEffect } from 'react';
import CryptoChart from './CryptoChart';
import { mockData } from './API';

function TradingApp() {
    const data = mockData;
    const [priceData, setPriceData] = useState([]);
    const [latestPrice, setLatestPrice] = useState(null);

    useEffect(() => {
        setPriceData(data);
        setLatestPrice(data[data.length - 1].value);
    }, []);

    const handleBuy = () => {
        console.log(`Buy at price: ${latestPrice}`);
        // Implement your buying logic here
    };

    const handleSell = () => {
        console.log(`Sell at price: ${latestPrice}`);
        // Implement your selling logic here
    };

    return (
        <div>
            <CryptoChart data={priceData} />
            <input type="text" value={latestPrice || ''} readOnly />
            <button onClick={handleBuy}>Buy</button>
            <button onClick={handleSell}>Sell</button>
        </div>
    );
}

export default TradingApp;