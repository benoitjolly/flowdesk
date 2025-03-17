'use client';

import { useState } from 'react';
import { useCurrencyPairs } from '@/context/CurrencyPairsContext';
import { MarketDataForm } from './MarketDataForm';
import { MarketDataDisplay } from './MarketDataDisplay';
import { MainContainer } from './styles';

export function MarketDataContainer() {
  const { setSelectedPair } = useCurrencyPairs();
  const [displayedPair, setDisplayedPair] = useState<string>('');

  const handleFormSubmit = (symbol: string) => {
    setSelectedPair(symbol);
    setDisplayedPair(symbol); // Only update the displayed pair when form is submitted
  };

  return (
    <MainContainer>
      <MarketDataForm onSubmit={handleFormSubmit} />
      
      {displayedPair && (
        <MarketDataDisplay symbol={displayedPair} />
      )}
    </MainContainer>
  );
} 