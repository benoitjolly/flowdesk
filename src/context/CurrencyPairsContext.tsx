'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getExchangeInfo } from '@/services/binance';

interface CurrencyPairsContextType {
  currencyPairs: string[];
  isLoading: boolean;
  error: string | null;
  selectedPair: string;
  setSelectedPair: (pair: string) => void;
}

const CurrencyPairsContext = createContext<CurrencyPairsContextType | undefined>(undefined);

export function CurrencyPairsProvider({ children }: { children: ReactNode }) {
  const [currencyPairs, setCurrencyPairs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPair, setSelectedPair] = useState<string>('');

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

  return (
    <CurrencyPairsContext.Provider 
      value={{ 
        currencyPairs, 
        isLoading, 
        error, 
        selectedPair, 
        setSelectedPair 
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