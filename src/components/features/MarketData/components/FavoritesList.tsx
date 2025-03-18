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
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

const FavoritesTitle = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-right: 2rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 0.25rem;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const EmptyState = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-style: italic;
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
        <TagsContainer>
          {favorites.map(pair => (
            <FavoriteTag
              key={pair}
              pair={pair}
              onSelect={onSelectFavorite}
              onRemove={onRemoveFavorite}
            />
          ))}
        </TagsContainer>
      )}
    </Container>
  );
} 