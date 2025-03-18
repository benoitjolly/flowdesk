'use client';

import { Binance24hTicker } from '@/services/binance';
import {
  Card,
  CardTitle,
  FlexRow,
  Label,
  Value
} from '../styles';

interface DailyTickerStatsProps {
  ticker: Binance24hTicker;
}

export function DailyTickerStats({ ticker }: DailyTickerStatsProps) {
  // Calculate price change percentage to display with correct color
  const priceChangePercent = parseFloat(ticker.priceChangePercent);
  const isPositive = priceChangePercent >= 0;
  
  return (
    <Card>
      <CardTitle>24h Statistics</CardTitle>
      <FlexRow>
        <Label>Price Change:</Label>
        <Value style={{ color: isPositive ? 'green' : 'red' }}>
          {parseFloat(ticker.priceChange).toFixed(8)} ({priceChangePercent.toFixed(2)}%)
        </Value>
      </FlexRow>
      <FlexRow>
        <Label>High:</Label>
        <Value>{parseFloat(ticker.highPrice).toFixed(8)}</Value>
      </FlexRow>
      <FlexRow>
        <Label>Low:</Label>
        <Value>{parseFloat(ticker.lowPrice).toFixed(8)}</Value>
      </FlexRow>
      <FlexRow>
        <Label>Volume:</Label>
        <Value>{parseFloat(ticker.volume).toFixed(2)}</Value>
      </FlexRow>
      <FlexRow>
        <Label>Quote Volume:</Label>
        <Value>{parseFloat(ticker.quoteVolume).toFixed(2)}</Value>
      </FlexRow>
      <FlexRow>
        <Label>Open Time:</Label>
        <Value>{new Date(ticker.openTime).toLocaleString()}</Value>
      </FlexRow>
      <FlexRow>
        <Label>Close Time:</Label>
        <Value>{new Date(ticker.closeTime).toLocaleString()}</Value>
      </FlexRow>
      <FlexRow>
        <Label>First Trade ID:</Label>
        <Value>{ticker.firstId}</Value>
      </FlexRow>
      <FlexRow>
        <Label>Last Trade ID:</Label>
        <Value>{ticker.lastId}</Value>
      </FlexRow>
      <FlexRow>
        <Label>Trade Count:</Label>
        <Value>{ticker.count}</Value>
      </FlexRow>
      <FlexRow>
        <Label>Weighted Average Price:</Label>
        <Value>{parseFloat(ticker.weightedAvgPrice).toFixed(8)}</Value>
      </FlexRow>
    </Card>
  );
} 