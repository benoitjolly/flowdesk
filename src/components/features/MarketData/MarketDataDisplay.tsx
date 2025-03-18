'use client';

import { useState, useEffect } from 'react';
import { BinanceTicker, Binance24hTicker, getTicker, get24hTicker } from '@/services';
import { Container } from './styles';
import {
  CurrentPriceTicker,
  LoadingState,
  ErrorState,
  DailyTickerStats
} from './components';

interface MarketDataDisplayProps {
  symbol: string;
}

export function MarketDataDisplay({ symbol }: MarketDataDisplayProps) {
  const [ticker, setTicker] = useState<BinanceTicker | null>(null);
  const [ticker24h, setTicker24h] = useState<Binance24hTicker | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      if (!symbol) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const [tickerData, ticker24hData] = await Promise.all([
          getTicker(symbol),
          get24hTicker(symbol)
        ]);
        
        setTicker(tickerData);
        setTicker24h(ticker24hData);
      
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
    </Container>
  );
} 