import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';


export const App = () => {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline></CssBaseline>
				<div className="app">
					App
				</div>
			</ThemeProvider>

		</ColorModeContext.Provider>

	)
}

export default App;