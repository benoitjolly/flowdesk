'use client';

import { BinanceTicker } from '@/services';
import {
  Card,
  CardTitle,
  FlexRow,
  Label,
  Value,
  LargeValue
} from '../styles';

interface CurrentPriceTickerProps {
  ticker: BinanceTicker;
}

export function CurrentPriceTicker({ ticker }: CurrentPriceTickerProps) {
  return (
    <Card>
      <CardTitle>Current Price</CardTitle>
      <FlexRow>
        <Label>Symbol:</Label>
        <Value>{ticker.symbol}</Value>
      </FlexRow>
      <FlexRow>
        <Label>Price:</Label>
        <LargeValue>{parseFloat(ticker.price).toFixed(8)}</LargeValue>
      </FlexRow>
    </Card>
  );
} 