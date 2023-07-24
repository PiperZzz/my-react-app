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

function fetchMockData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mockData);
        }, 1000);
    });
}

function fetchPriceData() {
    return fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Convert the data to the format expected by the chart
            const time = new Date().toISOString();
            const value = data.bitcoin.usd;
            return [{ time, value }];
        });
}

export { fetchPriceData, fetchMockData };