const fetchMockData = [
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

const fetchMockDataCandle = [
    { time: Date.UTC(2023, 6, 23, 0, 0, 0) / 1000, open: 30000, high: 30010, low: 29990, close: 30005 },
    { time: Date.UTC(2023, 6, 23, 0, 1, 0) / 1000, open: 30005, high: 30015, low: 29995, close: 30010 },
    { time: Date.UTC(2023, 6, 23, 0, 2, 0) / 1000, open: 30010, high: 30020, low: 30000, close: 30000 },
    { time: Date.UTC(2023, 6, 23, 0, 3, 0) / 1000, open: 30000, high: 30010, low: 29980, close: 30005 },
    { time: Date.UTC(2023, 6, 23, 0, 4, 0) / 1000, open: 30005, high: 30020, low: 29980, close: 30015 },
    { time: Date.UTC(2023, 6, 23, 0, 5, 0) / 1000, open: 30015, high: 30025, low: 29995, close: 30000 },
    { time: Date.UTC(2023, 6, 23, 0, 6, 0) / 1000, open: 30000, high: 30010, low: 29990, close: 29995 },
    { time: Date.UTC(2023, 6, 23, 0, 7, 0) / 1000, open: 29995, high: 30005, low: 29985, close: 29990 },
    { time: Date.UTC(2023, 6, 23, 0, 8, 0) / 1000, open: 29990, high: 30000, low: 29970, close: 29995 },
    { time: Date.UTC(2023, 6, 23, 0, 9, 0) / 1000, open: 29995, high: 30010, low: 29970, close: 29980 },
];

export { fetchMockData, fetchMockDataCandle };