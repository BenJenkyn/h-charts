import config from './config';

export interface Stock {
	close: number;
	date: string;
	dividends: number;
	high: number;
	low: number;
	open: number;
	stockSplits: number;
	volume: number;
}

export async function getAllStockHistory(symbol: string): Promise<Stock[]> {
	const response = await fetch(`${config.chartsBackendUrl}/stock/${symbol}`);
	const data = await response.json();
	return data;
}
