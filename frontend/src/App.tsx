import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

function App() {
	return (
		<>
			<div>
				<Routes>
					<Route path="/" element={<Navigate to="/dashboard" replace />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
