'use client';

import { useState, useEffect } from 'react';
import { BinanceTicker, getTicker } from '@/services';
import { Container } from './styles';
import {
  CurrentPriceTicker,
  LoadingState,
  ErrorState
} from './components';

interface MarketDataDisplayProps {
  symbol: string;
}

export function MarketDataDisplay({ symbol }: MarketDataDisplayProps) {
  const [ticker, setTicker] = useState<BinanceTicker | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      if (!symbol) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const [tickerData] = await Promise.all([
          getTicker(symbol),
        ]);
        
        setTicker(tickerData);
      
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
    </Container>
  );
} 