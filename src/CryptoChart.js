import React, { useRef, useEffect } from 'react';
import { createChart } from 'lightweight-charts';

function CryptoChart({ data }) {
    const chartContainerRef = useRef();

    useEffect(() => {
        const chart = createChart(chartContainerRef.current, { 
            width: 600, 
            height: 400,
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
        
        return () => chart.remove();
    }, [data]);

    return <div ref={chartContainerRef} />;
}

export default CryptoChart;