'use client';

import { useState } from 'react';
import { MarketDataForm } from './MarketDataForm';
import { MarketDataDisplay } from './MarketDataDisplay';
import { MainContainer } from './styles';

export function MarketDataContainer() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);

  const handleFormSubmit = (symbol: string) => {
    setSelectedSymbol(symbol);
  };

  return (
    <MainContainer>
      <MarketDataForm onSubmit={handleFormSubmit} />
      
      {selectedSymbol && (
        <MarketDataDisplay symbol={selectedSymbol} />
      )}
    </MainContainer>
  );
} 