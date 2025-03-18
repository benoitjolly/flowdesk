'use client';

import { useState } from 'react';
import { useCurrencyPairs } from '@/context/CurrencyPairsContext';
import { MarketDataForm } from './MarketDataForm';
import { MarketDataDisplay } from './MarketDataDisplay';
import { MainContainer, StickyHeader, ContentContainer } from './styles';

export function MarketDataContainer() {
  const { setSelectedPair } = useCurrencyPairs();
  const [displayedPair, setDisplayedPair] = useState<string>('');

  const handleFormSubmit = (symbol: string) => {
    setSelectedPair(symbol);
    setDisplayedPair(symbol); // Only update the displayed pair when form is submitted
  };

  return (
    <MainContainer>
      <StickyHeader>
        <MarketDataForm onSubmit={handleFormSubmit} />
      </StickyHeader>
      
      <ContentContainer>
        {displayedPair && (
          <MarketDataDisplay symbol={displayedPair} />
        )}
      </ContentContainer>
    </MainContainer>
  );
} 