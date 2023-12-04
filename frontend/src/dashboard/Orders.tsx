import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Stock } from '../api/stockHistory';

interface Props {
	stockData: Stock[];
}

// Generate Order Data
function createData(
	id: number,
	date: string,
	volume: number,
	high: number,
	low: number,
	dividends: number,
	open: number,
	stockSplits: number
) {
	return { id, date, volume, high, low, dividends, open, stockSplits };
}

function preventDefault(event: React.MouseEvent) {
	event.preventDefault();
}

export default function Orders(props: Props) {
	const { stockData } = props;
	const [rows, setRows] = React.useState<
		{
			id: number;
			date: string;
			volume: number;
			high: number;
			low: number;
			dividends: number;
			open: number;
			stockSplits: number;
		}[]
	>([]);

	React.useEffect(() => {
		const currData = stockData.map((stock, index) => {
			return createData(
				index,
				stock.date,
				stock.volume,
				stock.high,
				stock.low,
				stock.dividends,
				stock.open,
				stock.stockSplits
			);
		});
		setRows(currData);
	}, [stockData]);

	return (
		<React.Fragment>
			<Title>History</Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Date</TableCell>
						<TableCell>Volume</TableCell>
						<TableCell>High</TableCell>
						<TableCell>Low</TableCell>
						<TableCell>Dividends</TableCell>
            <TableCell>Open</TableCell>
						<TableCell align="right">Stock Splits</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.date}</TableCell>
              <TableCell>{row.volume}</TableCell>
              <TableCell>{row.high}</TableCell>
              <TableCell>{row.low}</TableCell>
              <TableCell>{row.dividends}</TableCell>
              <TableCell>{row.open}</TableCell>
							<TableCell align="right">{`$${row.stockSplits}`}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
				See more orders
			</Link>
		</React.Fragment>
	);
}
