import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const FormTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const FormErrorMessage = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.surfaceTonal};
  color: ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border-left: 3px solid ${({ theme }) => theme.colors.error};
`;

export const FormLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
`;

export const FormGroup = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 0.5rem;
  }
`;

export const FormLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textLight};
  white-space: nowrap;
`;

export const Select = styled.select`
  flex: 1;
  height: 38px;
  padding: 0 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.colors.surfaceA10};
  color: ${({ theme }) => theme.colors.text};
  min-width: 200px;
  appearance: menulist;
  
  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryA10};
  }
`;

export const LoadingPlaceholder = styled.div`
  height: 38px;
  background-color: ${({ theme }) => theme.colors.surfaceA20};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const SubmitButton = styled.button`
  height: 38px;
  padding: 0 1.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: background-color ${({ theme }) => theme.transitions.normal};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    flex: 1;
  }
  
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryA20};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.primaryA50};
    cursor: not-allowed;
  }
`;

export const FavoriteButton = styled.button`
  height: 38px;
  width: 38px;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.surfaceA10};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceA20};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`; 