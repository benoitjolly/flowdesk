'use client';

import { useState, useEffect } from 'react';
import { useCurrencyPairs } from '@/context/CurrencyPairsContext';
import {
  FormContainer,
  FormTitle,
  FormErrorMessage,
  FormGroup,
  FormLabel,
  Select,
  LoadingPlaceholder,
  SubmitButton
} from './styles';

interface MarketDataFormProps {
  onSubmit: (symbol: string) => void;
}

export function MarketDataForm({ onSubmit }: MarketDataFormProps) {
  const { currencyPairs, isLoading, error } = useCurrencyPairs();
  const [formSelectedPair, setFormSelectedPair] = useState<string>('');
  
  // Initialize the form selected pair when currency pairs are loaded
  useEffect(() => {
    if (currencyPairs.length > 0 && !formSelectedPair) {
      setFormSelectedPair(currencyPairs[0]);
    }
  }, [currencyPairs, formSelectedPair]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formSelectedPair) {
      onSubmit(formSelectedPair);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Select Currency Pair</FormTitle>
      
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="symbol">Currency Pair</FormLabel>
          
          {isLoading ? (
            <LoadingPlaceholder />
          ) : (
            <Select
              id="symbol"
              value={formSelectedPair}
              onChange={(e) => setFormSelectedPair(e.target.value)}
              required
            >
              {currencyPairs.length === 0 ? (
                <option value="">No pairs available</option>
              ) : (
                currencyPairs.map((symbol) => (
                  <option key={symbol} value={symbol}>
                    {symbol}
                  </option>
                ))
              )}
            </Select>
          )}
        </FormGroup>
        
        <SubmitButton
          type="submit"
          disabled={isLoading || !formSelectedPair}
        >
          {isLoading ? 'Loading...' : 'Get Market Data'}
        </SubmitButton>
      </form>
    </FormContainer>
  );
}