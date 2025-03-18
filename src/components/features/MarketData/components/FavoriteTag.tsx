'use client';

import styled from 'styled-components';

interface FavoriteTagProps {
  pair: string;
  onSelect: (pair: string) => void;
  onRemove: (pair: string) => void;
}

const TagContainer = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryA20};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 0.25rem 0.5rem;
  margin: 0;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryA30};
  }
  
  @media (max-width: 768px) {
    padding: 0.35rem 0.6rem;
    font-size: 0.9375rem;
  }
`;

const TagText = styled.span`
  margin-right: 0.3rem;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryA40};
  }
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    font-size: 1rem;
  }
`;

export function FavoriteTag({ pair, onSelect, onRemove }: FavoriteTagProps) {
  return (
    <TagContainer onClick={() => onSelect(pair)}>
      <TagText>{pair}</TagText>
      <RemoveButton 
        onClick={(e) => {
          e.stopPropagation();
          onRemove(pair);
        }}
        aria-label={`Remove ${pair} from favorites`}
      >
        ×
      </RemoveButton>
    </TagContainer>
  );
} 