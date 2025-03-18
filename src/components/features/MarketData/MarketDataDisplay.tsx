'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BinanceTicker, Binance24hTicker, BinanceTrade, getTicker, get24hTicker, getRecentTrades } from '@/services';
import { Container, Card, CardTitle, FlexRow, Label } from './styles';
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

const MemoizedCurrentPriceTicker = React.memo(CurrentPriceTicker);
const MemoizedDailyTickerStats = React.memo(DailyTickerStats);

export function MarketDataDisplay({ symbol }: MarketDataDisplayProps) {
  const [ticker, setTicker] = useState<BinanceTicker | null>(null);
  const [ticker24h, setTicker24h] = useState<Binance24hTicker | null>(null);
  const [recentTrades, setRecentTrades] = useState<BinanceTrade[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingTrades, setIsLoadingTrades] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [tradesLimit, setTradesLimit] = useState<number>(100);

  const fetchTrades = useCallback(async (limit: number = tradesLimit) => {
    if (!symbol) return;
    
    setIsLoadingTrades(true);
    
    try {
      const tradesData = await getRecentTrades(symbol, limit);
      setRecentTrades(tradesData);
      setTradesLimit(limit);
    } catch (err) {
      console.error('Error fetching trades:', err);
    } finally {
      setIsLoadingTrades(false);
    }
  }, [symbol]); 

  const handleTradesRefresh = useCallback((limit: number) => {
    fetchTrades(limit);
  }, [fetchTrades]);

  useEffect(() => {
    const fetchMarketData = async () => {
      if (!symbol) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const [tickerData, ticker24hData] = await Promise.all([
          getTicker(symbol),
          get24hTicker(symbol),
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

  useEffect(() => {
    fetchTrades(tradesLimit);
  }, [symbol, fetchTrades]);

  const TradesComponent = useMemo(() => {
    if (isLoadingTrades) {
      return (
        <Card>
          <CardTitle>Recent Trades</CardTitle>
          <FlexRow>
            <Label>Loading trades...</Label>
          </FlexRow>
        </Card>
      );
    }
    
    if (recentTrades.length === 0) {
      return (
        <Card>
          <CardTitle>Recent Trades</CardTitle>
          <FlexRow>
            <Label>No trades available</Label>
          </FlexRow>
        </Card>
      );
    }
    
    return (
      <RecentTradesTable 
        trades={recentTrades} 
        onRefresh={handleTradesRefresh}
        initialPageSize={tradesLimit}
      />
    );
  }, [recentTrades, isLoadingTrades, handleTradesRefresh, tradesLimit]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return (
    <Container>
      {ticker && <MemoizedCurrentPriceTicker ticker={ticker} />}
      {ticker24h && <MemoizedDailyTickerStats ticker={ticker24h} />}
      {TradesComponent}
    </Container>
  );
} 