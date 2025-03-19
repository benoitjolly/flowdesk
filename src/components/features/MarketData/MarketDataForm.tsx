'use client';

import { useState, useEffect } from 'react';
import { Autocomplete, TextField, ThemeProvider } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useCurrencyPairs } from '@/context/CurrencyPairsContext';
import { useTheme } from '@/context/ThemeContext';
import { FavoritesList } from './components/FavoritesList';
import { getMuiTheme } from './styles/MuiStyles';
import {
  FormContainer,
  FormTitle,
  FormErrorMessage,
  FormLayout,
  FormGroup,
  FormLabel,
  LoadingPlaceholder,
  SubmitButton,
  ButtonsContainer,
  FavoriteButton
} from './styles';

interface MarketDataFormProps {
  onSubmit: (symbol: string) => void;
}

export function MarketDataForm({ onSubmit }: MarketDataFormProps) {
  const { themeMode } = useTheme();
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

  const handleAutocompleteChange = (_event: React.SyntheticEvent, newValue: string | null) => {
    if (newValue) {
      setFormSelectedPair(newValue);
    }
  };

  const options: string[] = currencyPairs;
  const currentTheme = getMuiTheme(themeMode);

  const renderOption = (props: React.HTMLAttributes<HTMLLIElement>, option: string) => {
    const { key, ...otherProps } = props as { key: string } & React.HTMLAttributes<HTMLLIElement>;
    return (
      <li key={key} {...otherProps}>
        {option} {isFavorite(option) && <StarIcon fontSize="small" sx={{ marginLeft: 0.5, color: '#FFD700' }} />}
      </li>
    );
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
              <ThemeProvider theme={currentTheme}>
                <Autocomplete
                  id="symbol"
                  options={options}
                  value={formSelectedPair}
                  onChange={handleAutocompleteChange}
                  renderOption={renderOption}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search currency pair..."
                      variant="outlined"
                      size="small"
                    />
                  )}
                  disableClearable
                  fullWidth
                  blurOnSelect
                  openOnFocus
                />
              </ThemeProvider>
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