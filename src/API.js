const mockPriceData = [
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
    { time: Date.UTC(2023, 6, 23, 0, 10, 0) / 1000, open: 29980, high: 30000, low: 29970, close: 29990 },
    { time: Date.UTC(2023, 6, 23, 0, 11, 0) / 1000, open: 29990, high: 30005, low: 29985, close: 29995 },
    { time: Date.UTC(2023, 6, 23, 0, 12, 0) / 1000, open: 29995, high: 30005, low: 29980, close: 29990 },
    { time: Date.UTC(2023, 6, 23, 0, 13, 0) / 1000, open: 29990, high: 30010, low: 29985, close: 29995 },
    { time: Date.UTC(2023, 6, 23, 0, 14, 0) / 1000, open: 29995, high: 30015, low: 29990, close: 30010 },
    { time: Date.UTC(2023, 6, 23, 0, 15, 0) / 1000, open: 30010, high: 30020, low: 29995, close: 30005 },
    { time: Date.UTC(2023, 6, 23, 0, 16, 0) / 1000, open: 30005, high: 30020, low: 30000, close: 30015 },
    { time: Date.UTC(2023, 6, 23, 0, 17, 0) / 1000, open: 30015, high: 30025, low: 30000, close: 30010 },
    { time: Date.UTC(2023, 6, 23, 0, 18, 0) / 1000, open: 30010, high: 30025, low: 29995, close: 30020 },
    { time: Date.UTC(2023, 6, 23, 0, 19, 0) / 1000, open: 30020, high: 30035, low: 30010, close: 30025 },
    { time: Date.UTC(2023, 6, 23, 0, 20, 0) / 1000, open: 30025, high: 30030, low: 30015, close: 30020 },
    { time: Date.UTC(2023, 6, 23, 0, 21, 0) / 1000, open: 30020, high: 30025, low: 30005, close: 30010 },
    { time: Date.UTC(2023, 6, 23, 0, 22, 0) / 1000, open: 30010, high: 30015, low: 30005, close: 30010 },
    { time: Date.UTC(2023, 6, 23, 0, 23, 0) / 1000, open: 30010, high: 30025, low: 30005, close: 30015 },
    { time: Date.UTC(2023, 6, 23, 0, 24, 0) / 1000, open: 30015, high: 30030, low: 30010, close: 30025 },
    { time: Date.UTC(2023, 6, 23, 0, 25, 0) / 1000, open: 30025, high: 30030, low: 30015, close: 30020 },
    { time: Date.UTC(2023, 6, 23, 0, 26, 0) / 1000, open: 30020, high: 30025, low: 30000, close: 30010 },
    { time: Date.UTC(2023, 6, 23, 0, 27, 0) / 1000, open: 30010, high: 30015, low: 29995, close: 30000 },
    { time: Date.UTC(2023, 6, 23, 0, 28, 0) / 1000, open: 30000, high: 30005, low: 29990, close: 30000 },
    { time: Date.UTC(2023, 6, 23, 0, 29, 0) / 1000, open: 30000, high: 30005, low: 29985, close: 29990 },
];

const mockUserData = {
    balance: 10000,
    holdings: { BTC: 1, ETH: 0, LTC: 0 },
};

export { mockPriceData, mockUserData };