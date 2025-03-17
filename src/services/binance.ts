// Types for Binance API responses
export interface BinanceTicker {
  symbol: string;
  price: string;
}

export interface Binance24hTicker {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
}

export interface BinanceTrade {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}

// Type for exchange info symbol
interface BinanceSymbol {
  symbol: string;
  status: string;
  baseAsset: string;
  quoteAsset: string;
  [key: string]: string | number | boolean | object | undefined;
}

// Base URL for Binance API
const BINANCE_API_URL = 'https://api.binance.com/api/v3';

// Get current price ticker for a symbol
export async function getTicker(symbol: string): Promise<BinanceTicker> {
  const response = await fetch(`${BINANCE_API_URL}/ticker/price?symbol=${symbol}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch ticker: ${response.statusText}`);
  }
  
  return response.json();
}

// Get 24h ticker for a symbol
export async function get24hTicker(symbol: string): Promise<Binance24hTicker> {
  const response = await fetch(`${BINANCE_API_URL}/ticker/24hr?symbol=${symbol}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch 24h ticker: ${response.statusText}`);
  }
  
  return response.json();
}

// Get recent trades for a symbol (limit defaults to 500)
export async function getRecentTrades(symbol: string, limit: number = 20): Promise<BinanceTrade[]> {
  const response = await fetch(`${BINANCE_API_URL}/trades?symbol=${symbol}&limit=${limit}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch recent trades: ${response.statusText}`);
  }
  
  return response.json();
}

// Get all available trading pairs
export async function getExchangeInfo(): Promise<string[]> {
  const response = await fetch(`${BINANCE_API_URL}/exchangeInfo`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch exchange info: ${response.statusText}`);
  }
  
  const data = await response.json();
  return data.symbols.map((symbol: BinanceSymbol) => symbol.symbol);
} 