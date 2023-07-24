import React, { useState, useEffect } from 'react';
import CryptoChart from './CryptoChart';
import { mockPriceData, mockUserData } from './API';

function TradingApp() {
    const [priceData, setPriceData] = useState(mockPriceData);
    const [latestPrice, setLatestPrice] = useState(null);
    const [inputPrice, setInputPrice] = useState(null); // User input price
    const [inputAmount, setInputAmount] = useState(null); // User input amount
    const [balance, setBalance] = useState(mockUserData.balance); // User's balance in USD
    const [btc, setBtc] = useState(mockUserData.holdings.BTC); // User's BTC amount

    useEffect(() => {
        setLatestPrice(priceData[priceData.length - 1].close);
    }, [priceData]);

    const handleBuy = () => {
        const cost = inputAmount * inputPrice; // Cost of buying the input amount at the input price
        if (cost <= balance) {
            setBalance(balance - cost);
            setBtc(btc + parseFloat(inputAmount));
        } else {
            alert('Not enough balance');
        }
    };

    const handleSell = () => {
        if (inputAmount <= btc) {
            const earnings = inputAmount * inputPrice; // Earnings from selling the input amount at the input price
            setBalance(balance + earnings);
            setBtc(btc - parseFloat(inputAmount));
        } else {
            alert('Not enough BTC');
        }
    };

    return (
        <div>
            <CryptoChart data={priceData} />
            <input 
                type="text" 
                value={inputPrice || ''} 
                onChange={e => setInputPrice(e.target.value)}
                placeholder="Price"
            />
            <input 
                type="text" 
                value={inputAmount || ''} 
                onChange={e => setInputAmount(e.target.value)}
                placeholder="Amount"
            />
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