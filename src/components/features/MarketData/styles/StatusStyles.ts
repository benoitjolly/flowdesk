import styled from 'styled-components';
import { Card } from './CardStyles';

export const LoadingContainer = styled(Card)`
  .pulse {
    height: 1rem;
    background-color: ${({ theme }) => theme.colors.surfaceA20};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .pulse:first-child {
    height: 1.5rem;
    width: 75%;
  }
  
  .pulse:nth-child(2) {
    width: 50%;
  }
  
  .pulse:nth-child(3) {
    width: 83%;
  }
  
  .pulse:nth-child(4) {
    width: 66%;
  }
  
  .pulse:nth-child(5) {
    width: 75%;
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

export const ErrorContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.surfaceTonal};
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const ErrorTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.error};
`;

export const ErrorMessage = styled.p`
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.error};
`; 