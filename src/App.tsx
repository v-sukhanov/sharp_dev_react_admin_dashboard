import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Topbar } from './scenes/global/Topbar';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './scenes/dashboard';
import { Sidebar } from './scenes/global/Sidebar';


export const App = () => {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline></CssBaseline>
				<div className="app">
					<Sidebar></Sidebar>
					<main className="content">
						<Topbar/>
						<Routes>
							<Route path="/" element={<Dashboard/>}/>
						</Routes>
					</main>
				</div>
			</ThemeProvider>

		</ColorModeContext.Provider>

	)
}

export default App;