import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Label,
	ResponsiveContainer,
} from 'recharts';
import Title from './Title';
import { Stock } from '../api/stockHistory';
import { formatDate } from '../lib/formatDate';

interface Props {
	stockData: Stock[];
}

// Generate Sales Data
function createData(date: string, volume: number) {
	const formattedDate = formatDate(date);
	return { date: formattedDate, volume };
}

export default function Chart(props: Props) {
	const { stockData } = props;
	const [data, setData] = React.useState<
		{
			date: string;
			volume: number;
		}[]
	>([]);

	React.useEffect(() => {
		const currData = stockData.map((stock) => {
			return createData(stock.date, stock.volume);
		});
		setData(currData);
	}, [stockData]);

	const theme = useTheme();

	return (
		<React.Fragment>
			<Title>Volume Over Time</Title>
			<ResponsiveContainer>
				<LineChart
					data={data}
					margin={{
						top: 16,
						right: 16,
						bottom: 0,
						left: 24,
					}}
				>
					<XAxis
						dataKey="date"
						stroke={theme.palette.text.secondary}
						style={theme.typography.body2}
					/>
					<YAxis
						dataKey="volume"
						stroke={theme.palette.text.secondary}
						style={{
							padding: '20px',
							...theme.typography.body2,
						}}
					>
						<Label
							angle={270}
							position="left"
							style={{
								textAnchor: 'middle',
								fill: theme.palette.text.primary,
								...theme.typography.body1,
								padding: '20px',
							}}
							offset={20}
						>
							Volume
						</Label>
					</YAxis>
					<Line
						isAnimationActive={false}
						type="monotone"
						dataKey="volume"
						stroke={theme.palette.primary.main}
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</React.Fragment>
	);
}
