'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getExchangeInfo } from '@/services/binance';

interface CurrencyPairsContextType {
  currencyPairs: string[];
  isLoading: boolean;
  error: string | null;
  selectedPair: string;
  setSelectedPair: (pair: string) => void;
  favoritePairs: string[];
  addToFavorites: (pair: string) => void;
  removeFromFavorites: (pair: string) => void;
  isFavorite: (pair: string) => boolean;
}

const CurrencyPairsContext = createContext<CurrencyPairsContextType | undefined>(undefined);

export function CurrencyPairsProvider({ children }: { children: ReactNode }) {
  const [currencyPairs, setCurrencyPairs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPair, setSelectedPair] = useState<string>('');
  const [favoritePairs, setFavoritePairs] = useState<string[]>([]);

  // Load favorite pairs from localStorage on initial render
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoritePairs');
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        if (Array.isArray(parsedFavorites)) {
          setFavoritePairs(parsedFavorites);
        }
      } catch (err) {
        console.error('Failed to parse favorite pairs from localStorage', err);
      }
    }
  }, []);

  // Save favorite pairs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favoritePairs', JSON.stringify(favoritePairs));
  }, [favoritePairs]);

  useEffect(() => {
    const fetchCurrencyPairs = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const pairs = await getExchangeInfo();
        setCurrencyPairs(pairs);
      } catch (err) {
        setError('Failed to fetch currency pairs');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrencyPairs();
  }, []);

  const addToFavorites = (pair: string) => {
    if (!favoritePairs.includes(pair)) {
      setFavoritePairs([...favoritePairs, pair]);
    }
  };

  const removeFromFavorites = (pair: string) => {
    setFavoritePairs(favoritePairs.filter(p => p !== pair));
  };

  const isFavorite = (pair: string) => {
    return favoritePairs.includes(pair);
  };

  return (
    <CurrencyPairsContext.Provider 
      value={{ 
        currencyPairs, 
        isLoading, 
        error, 
        selectedPair, 
        setSelectedPair,
        favoritePairs,
        addToFavorites,
        removeFromFavorites,
        isFavorite
      }}
    >
      {children}
    </CurrencyPairsContext.Provider>
  );
}

export function useCurrencyPairs() {
  const context = useContext(CurrencyPairsContext);
  
  if (context === undefined) {
    throw new Error('useCurrencyPairs must be used within a CurrencyPairsProvider');
  }
  
  return context;
} 