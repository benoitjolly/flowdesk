'use client';

import { useState, useEffect } from 'react';
import { useCurrencyPairs } from '@/context/CurrencyPairsContext';
import { FavoritesList } from './components/FavoritesList';
import {
  FormContainer,
  FormTitle,
  FormErrorMessage,
  FormLayout,
  FormGroup,
  FormLabel,
  Select,
  LoadingPlaceholder,
  SubmitButton,
  ButtonsContainer,
  FavoriteButton
} from './styles';

interface MarketDataFormProps {
  onSubmit: (symbol: string) => void;
}

export function MarketDataForm({ onSubmit }: MarketDataFormProps) {
  const { 
    currencyPairs, 
    isLoading, 
    error, 
    favoritePairs, 
    addToFavorites, 
    removeFromFavorites,
    isFavorite
  } = useCurrencyPairs();
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

  const handleAddToFavorites = () => {
    if (formSelectedPair) {
      addToFavorites(formSelectedPair);
    }
  };

  const handleSelectFavorite = (pair: string) => {
    setFormSelectedPair(pair);
    onSubmit(pair);
  };

  return (
    <FormContainer>
      <FormTitle>Market Data</FormTitle>
      
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
      
      <form onSubmit={handleSubmit}>
        <FormLayout>
          <FormGroup>
            <FormLabel htmlFor="symbol">Currency Pair:</FormLabel>
            
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
          
          <ButtonsContainer>
            <SubmitButton
              type="submit"
              disabled={isLoading || !formSelectedPair}
            >
              {isLoading ? 'Loading...' : 'Get Data'}
            </SubmitButton>
            
            <FavoriteButton
              type="button"
              onClick={handleAddToFavorites}
              disabled={isLoading || !formSelectedPair || isFavorite(formSelectedPair)}
              title={isFavorite(formSelectedPair) ? 'Already in favorites' : 'Add to favorites'}
            >
              {isFavorite(formSelectedPair) ? '★' : '☆'}
            </FavoriteButton>
          </ButtonsContainer>
        </FormLayout>
        
        {favoritePairs.length > 0 && (
          <FavoritesList 
            favorites={favoritePairs}
            onSelectFavorite={handleSelectFavorite}
            onRemoveFavorite={removeFromFavorites}
          />
        )}
      </form>
    </FormContainer>
  );
}