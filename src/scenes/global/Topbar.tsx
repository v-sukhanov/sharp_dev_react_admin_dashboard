import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../theme';
import React, { useContext } from 'react';
import { GridSearchIcon } from '@mui/x-data-grid';
import {
	DarkModeOutlined,
	LightModeOutlined,
	NotificationsOutlined,
	PersonOutlined,
	Search,
	SettingsOutlined
} from '@mui/icons-material';

export const Topbar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);
	return (
		<Box display="flex" justifyContent="space-between" p={2}>
			<Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
				<InputBase sx={{ml: 2, flex: 1}} placeholder="Search"/>
				<IconButton type="button">
					<Search></Search>
				</IconButton>
			</Box>
			<Box display="flex">
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === 'dark' ? <LightModeOutlined/> : <DarkModeOutlined/>}
				</IconButton>
				<IconButton>
					<NotificationsOutlined></NotificationsOutlined>
				</IconButton>
				<IconButton>
					<SettingsOutlined></SettingsOutlined>
				</IconButton>
				<IconButton>
					<PersonOutlined></PersonOutlined>
				</IconButton>
			</Box>
		</Box>
	)
}
