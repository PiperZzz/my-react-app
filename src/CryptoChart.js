import React, { useRef, useEffect } from 'react';
import { createChart } from 'lightweight-charts';

function CryptoChart({ data }) {
    const chartContainerRef = useRef();

    useEffect(() => {
        const chart = createChart(chartContainerRef.current, { 
            width: 400, 
            height: 300,
            timeScale: {
                tickMarkFormatter: (time, tickMarkType, locale) => {
                    const date = new Date(time * 1000);
                    const hours = date.getUTCHours().toString().padStart(2, '0');
                    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
                    return `${hours}:${minutes}`;
                },
            },
        });
        const candleSeries = chart.addCandlestickSeries();

        candleSeries.setData(data);

        // Set visible range to start from the first data point
        // const from = data[0].time;
        // const to = data[data.length - 1].time;
        // chart.timeScale().setVisibleRange({ from, to });

        return () => chart.remove();
    }, [data]);

    return <div ref={chartContainerRef} />;
}

export default CryptoChart;