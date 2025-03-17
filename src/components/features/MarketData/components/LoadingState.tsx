'use client';

import { LoadingContainer } from '../styles';

export function LoadingState() {
  return (
    <LoadingContainer>
      <div className="pulse"></div>
      <div className="pulse"></div>
      <div className="pulse"></div>
      <div className="pulse"></div>
      <div className="pulse"></div>
    </LoadingContainer>
  );
} 