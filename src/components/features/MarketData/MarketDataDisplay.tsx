'use client';

import { useState, useEffect } from 'react';
import { BinanceTicker, Binance24hTicker, BinanceTrade, getTicker, get24hTicker, getRecentTrades } from '@/services';
import { Container } from './styles';
import {
  CurrentPriceTicker,
  LoadingState,
  ErrorState,
  DailyTickerStats,
  RecentTradesTable
} from './components';

interface MarketDataDisplayProps {
  symbol: string;
}

export function MarketDataDisplay({ symbol }: MarketDataDisplayProps) {
  const [ticker, setTicker] = useState<BinanceTicker | null>(null);
  const [ticker24h, setTicker24h] = useState<Binance24hTicker | null>(null);
  const [recentTrades, setRecentTrades] = useState<BinanceTrade[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      if (!symbol) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const [tickerData, ticker24hData, tradesData] = await Promise.all([
          getTicker(symbol),
          get24hTicker(symbol),
          getRecentTrades(symbol, 20)
        ]);
        
        setTicker(tickerData);
        setTicker24h(ticker24hData);
        setRecentTrades(tradesData);
      
      } catch (err) {
        console.error('Error fetching market data:', err);
        setError('Failed to fetch market data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarketData();
  }, [symbol]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return (
    <Container>
      {ticker && <CurrentPriceTicker ticker={ticker} />}
      {ticker24h && <DailyTickerStats ticker={ticker24h} />}
      {recentTrades.length > 0 && <RecentTradesTable trades={recentTrades} />}
    </Container>
  );
} 