import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const MainListItems = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const handleClick = (ticker: string) => {
		setSearchParams({ ticker });
		console.log('ticker', ticker);
		console.log(searchParams.get('ticker'));
	};

	return (
		<React.Fragment>
			<ListItemButton
				onClick={() => handleClick('MSFT')}
				selected={searchParams.get('ticker') === 'MSFT'}
			>
				<ListItemIcon>
					<AssignmentIcon />
				</ListItemIcon>
				<ListItemText primary="MSFT" />
			</ListItemButton>
			<ListItemButton
				onClick={() => handleClick('AAPL')}
				selected={searchParams.get('ticker') === 'AAPL'}
			>
				<ListItemIcon>
					<AssignmentIcon />
				</ListItemIcon>
				<ListItemText primary="AAPL" />
			</ListItemButton>
			<ListItemButton
				onClick={() => handleClick('GOOG')}
				selected={searchParams.get('ticker') === 'GOOG'}
			>
				<ListItemIcon>
					<AssignmentIcon />
				</ListItemIcon>
				<ListItemText primary="GOOG" />
			</ListItemButton>
		</React.Fragment>
	);
};
