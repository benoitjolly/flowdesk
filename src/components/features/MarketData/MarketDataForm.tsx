'use client';

import { useState, useEffect } from 'react';
import { getExchangeInfo } from '@/services';
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
  const [symbols, setSymbols] = useState<string[]>([]);
  const [selectedSymbol, setSelectedSymbol] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch available symbols on component mount
  useEffect(() => {
    const fetchSymbols = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getExchangeInfo();
        const sortedSymbols = data;
        setSymbols(sortedSymbols);
        if (sortedSymbols.length > 0) {
          setSelectedSymbol(sortedSymbols[0]);
        }
      } catch (err) {
        setError('Failed to fetch available currency pairs');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSymbols();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSymbol) {
      onSubmit(selectedSymbol);
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
              value={selectedSymbol}
              onChange={(e) => setSelectedSymbol(e.target.value)}
              required
            >
              {symbols.length === 0 ? (
                <option value="">No pairs available</option>
              ) : (
                symbols.map((symbol) => (
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
          disabled={isLoading || !selectedSymbol}
        >
          {isLoading ? 'Loading...' : 'Get Market Data'}
        </SubmitButton>
      </form>
    </FormContainer>
  );
}