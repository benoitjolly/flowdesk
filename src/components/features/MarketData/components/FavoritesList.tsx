'use client';

import styled from 'styled-components';
import { FavoriteTag } from './FavoriteTag';

interface FavoritesListProps {
  favorites: string[];
  onSelectFavorite: (pair: string) => void;
  onRemoveFavorite: (pair: string) => void;
}

const Container = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
`;

const FavoritesTitle = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  width: 100%;
  opacity: 0.7;
`;

const EmptyState = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  font-style: italic;
  opacity: 0.7;
`;

export function FavoritesList({ favorites, onSelectFavorite, onRemoveFavorite }: FavoritesListProps) {
  if (favorites.length === 0) {
    return null;
  }
  
  return (
    <Container>
      <FavoritesTitle>Favorites:</FavoritesTitle>
      {favorites.length === 0 ? (
        <EmptyState>No favorites yet</EmptyState>
      ) : (
        favorites.map(pair => (
          <FavoriteTag
            key={pair}
            pair={pair}
            onSelect={onSelectFavorite}
            onRemove={onRemoveFavorite}
          />
        ))
      )}
    </Container>
  );
} 