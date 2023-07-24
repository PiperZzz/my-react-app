import React, { useState, useEffect } from 'react';
import CryptoChart from './CryptoChart';

function TradingApp() {
    const [priceData, setPriceData] = useState([]);
    const [latestPrice, setLatestPrice] = useState(null);

    useEffect(() => {
        const mockData = [
            { time: Date.UTC(2023, 6, 23, 0, 0, 0) / 1000, value: 30000 },
            { time: Date.UTC(2023, 6, 23, 0, 1, 0) / 1000, value: 30010 },
            { time: Date.UTC(2023, 6, 23, 0, 2, 0) / 1000, value: 29995 },
            { time: Date.UTC(2023, 6, 23, 0, 3, 0) / 1000, value: 30020 },
            { time: Date.UTC(2023, 6, 23, 0, 4, 0) / 1000, value: 30025 },
            { time: Date.UTC(2023, 6, 23, 0, 5, 0) / 1000, value: 29980 },
            { time: Date.UTC(2023, 6, 23, 0, 6, 0) / 1000, value: 30010 },
            { time: Date.UTC(2023, 6, 23, 0, 7, 0) / 1000, value: 30030 },
            { time: Date.UTC(2023, 6, 23, 0, 8, 0) / 1000, value: 30025 },
            { time: Date.UTC(2023, 6, 23, 0, 9, 0) / 1000, value: 30040 },
        ];
        setPriceData(mockData);
        setLatestPrice(mockData[mockData.length - 1].value);
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