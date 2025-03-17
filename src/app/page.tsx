'use client';

import { AppLayout } from '@/components/layout';
import { Title } from '@/components/ui';
import { MarketDataContainer } from '@/components/features';
import { PageContainer, PageHeader } from '@/components/features/MarketData/styles';

export default function Home() {
  return (
    <AppLayout>
      <PageHeader>
        <Title>Currency Pair Market Data</Title>
      </PageHeader>
      <PageContainer>
        <MarketDataContainer />
      </PageContainer>
    </AppLayout>
  );
}
