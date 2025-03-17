'use client';

import { ErrorContainer, ErrorTitle, ErrorMessage } from '../styles';

interface ErrorStateProps {
  message: string;
}

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <ErrorContainer>
      <ErrorTitle>Error</ErrorTitle>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  );
} 