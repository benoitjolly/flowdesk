'use client';

import { BinanceTrade } from '@/services/binance';
import {
  Card,
  CardTitle,
  FlexRow,
  Label
} from '../styles';
import styled from 'styled-components';

interface RecentTradesTableProps {
  trades: BinanceTrade[];
}

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
//   border-bottom: 1px solid #ddd;
`;

const BuyerCell = styled(TableCell)<{ $isBuyer: boolean }>`
  color: ${({ $isBuyer }) => $isBuyer ? 'red' : 'green'};
  font-weight: 500;
`;

export function RecentTradesTable({ trades }: RecentTradesTableProps) {
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
      <CardTitle>Recent Trades</CardTitle>
      <TradesTable>
        <thead>
          <TableRow>
            <TableHeader>Time</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Type</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {trades.map((trade) => (
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