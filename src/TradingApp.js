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
    const [orders, setOrders] = useState([]); // All orders
    const [orderId, setOrderId] = useState(0); // ID for the next order

    useEffect(() => {
        setLatestPrice(priceData[priceData.length - 1].close);
    }, [priceData]);

    const handleBuy = () => {
        const cost = inputAmount * inputPrice; // Cost of buying the input amount at the input price
        if (cost <= balance) {
            // Deduct the cost from the balance immediately
            setBalance(balance - cost);
    
            // Add the new order
            const order = {
                id: orderId,
                price: inputPrice,
                amount: inputAmount,
                type: 'Buy',
                status: inputPrice >= latestPrice ? 'Completed' : 'Pending'
            };
    
            if (order.status === 'Completed') {
                setBtc(btc + parseFloat(inputAmount));
            }
    
            setOrders([...orders, order]);
            setOrderId(orderId + 1); // Update the ID for the next order
        } else {
            alert('Not enough balance');
        }
    };
    
    const handleSell = () => {
        // Add the new order
        const order = {
            id: orderId,
            price: inputPrice,
            amount: inputAmount,
            type: 'Sell',
            status: inputPrice <= latestPrice ? 'Completed' : 'Pending'
        };
    
        if (order.status === 'Completed') {
            if (inputAmount <= btc) {
                const earnings = inputAmount * inputPrice; // Earnings from selling the input amount at the input price
                setBalance(balance + earnings);
                setBtc(btc - parseFloat(inputAmount));
            } else {
                alert('Not enough BTC');
                return;
            }
        }
    
        setOrders([...orders, order]);
        setOrderId(orderId + 1); // Update the ID for the next order
    };
    
    const handleCancel = (id) => {
        const order = orders.find(order => order.id === id);
        if (order && order.status === 'Pending') {
            // If the order is pending and is a buy order, refund the balance
            if (order.type === 'Buy') {
                setBalance(balance + order.price * order.amount);
            }
            setOrders(orders.filter(order => order.id !== id));
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
            <div>
                <h2>Order Details</h2>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {orders.map((order, index) => (
                        <tr key={order.id}>
                            <td>{order.type}</td>
                            <td>{order.price}</td>
                            <td>{order.amount}</td>
                            <td>{order.status}</td>
                            <td>
                            {order.status === 'Pending' && <button onClick={() => handleCancel(order.id)}>Cancel</button>}
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

export default TradingApp;