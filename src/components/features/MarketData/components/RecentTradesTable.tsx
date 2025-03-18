'use client';

import { BinanceTrade } from '@/services/binance';
import { useState, useEffect } from 'react';
import {
  Card,
  CardTitle,
  FlexRow,
  Label
} from '../styles';
import styled from 'styled-components';

interface RecentTradesTableProps {
  trades: BinanceTrade[];
  onRefresh?: (limit: number) => void;
  initialPageSize?: number;
}

type SortKey = 'time' | 'price' | 'qty';
type SortDirection = 'asc' | 'desc';

const TradesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.surfaceA20};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  position: relative;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceA20};
  }
`;

const SortIndicator = styled.span<{ $active: boolean }>`
  margin-left: 4px;
  opacity: ${props => props.$active ? 1 : 0.3};
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.surfaceA10};
  }
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.surface};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceA20};
  }
`;

const TableCell = styled.td`
  padding: 0.5rem;
`;

const BuyerCell = styled(TableCell)<{ $isBuyer: boolean }>`
  color: ${({ $isBuyer }) => $isBuyer ? 'red' : 'green'};
  font-weight: 500;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PageSizeSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Select = styled.select`
  padding: 0.25rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export function RecentTradesTable({ trades, onRefresh, initialPageSize = 10 }: RecentTradesTableProps) {
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: SortDirection;
  }>({
    key: 'time',
    direction: 'desc'
  });
  
  const [pageSize, setPageSize] = useState<number>(initialPageSize);
  
  useEffect(() => {
    setPageSize(initialPageSize);
  }, [initialPageSize]);
  
  const requestSort = (key: SortKey) => {
    let direction: SortDirection = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortSymbol = (key: SortKey) => {
    if (sortConfig.key !== key) return '↕';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  const sortedTrades = [...trades].sort((a, b) => {
    if (sortConfig.key === 'time') {
      return sortConfig.direction === 'asc' 
        ? a.time - b.time
        : b.time - a.time;
    }
    
    if (sortConfig.key === 'price') {
      return sortConfig.direction === 'asc' 
        ? parseFloat(a.price) - parseFloat(b.price)
        : parseFloat(b.price) - parseFloat(a.price);
    }
    
    if (sortConfig.key === 'qty') {
      return sortConfig.direction === 'asc' 
        ? parseFloat(a.qty) - parseFloat(b.qty)
        : parseFloat(b.qty) - parseFloat(a.qty);
    }
    
    return 0;
  }).slice(0, pageSize);

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = Number(e.target.value);
    setPageSize(newSize);
    
    if (onRefresh) {
      onRefresh(newSize);
    }
  };

  if (!trades || trades.length === 0) {
    return (
      <Card>
        <CardTitle>Recent Trades</CardTitle>
        <FlexRow>
          <Label>No trades available</Label>
        </FlexRow>
      </Card>
    );
  }

  return (
    <Card>
      <HeaderRow>
        <CardTitle>Recent Trades</CardTitle>
        <PageSizeSelector>
          <Label>Items per page:</Label>
          <Select value={pageSize} onChange={handlePageSizeChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </Select>
        </PageSizeSelector>
      </HeaderRow>
      <TradesTable>
        <thead>
          <TableRow>
            <TableHeader onClick={() => requestSort('time')}>
              Time <SortIndicator $active={sortConfig.key === 'time'}>{getSortSymbol('time')}</SortIndicator>
            </TableHeader>
            <TableHeader onClick={() => requestSort('price')}>
              Price <SortIndicator $active={sortConfig.key === 'price'}>{getSortSymbol('price')}</SortIndicator>
            </TableHeader>
            <TableHeader onClick={() => requestSort('qty')}>
              Quantity <SortIndicator $active={sortConfig.key === 'qty'}>{getSortSymbol('qty')}</SortIndicator>
            </TableHeader>
            <TableHeader>Type</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sortedTrades.map((trade) => (
            <TableRow key={trade.id}>
              <TableCell>{new Date(trade.time).toLocaleTimeString()}</TableCell>
              <TableCell>{parseFloat(trade.price).toFixed(8)}</TableCell>
              <TableCell>{parseFloat(trade.qty).toFixed(8)}</TableCell>
              <BuyerCell $isBuyer={trade.isBuyerMaker}>
                {trade.isBuyerMaker ? 'SELL' : 'BUY'}
              </BuyerCell>
            </TableRow>
          ))}
        </tbody>
      </TradesTable>
    </Card>
  );
} 