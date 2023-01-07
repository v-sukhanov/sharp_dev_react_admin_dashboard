import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { Header } from '../../components/Header';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from '../../data/mockData';
import React from 'react';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';
import { GridColumns } from '@mui/x-data-grid/models/colDef/gridColDef';


export const Team = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const columns: GridColumns = [
		{ field: "id", headerName: "ID" },
		{
			field: "name",
			headerName: "Name",
			flex: 1,
			cellClassName: "name-column--cell",
		},
		{
			field: "age",
			headerName: "Age",
			type: "number",
			headerAlign: "left",
			align: "left",
		},
		{
			field: "phone",
			headerName: "Phone Number",
			flex: 1,
		},
		{
			field: "email",
			headerName: "Email",
			flex: 1,
		},
		{
			field: "accessLevel",
			headerName: "Access Level",
			flex: 1,
		},
	];
	return <Box m="20px">
		<Header title="TEAM" subtitle="Managing the Team Members" />
		<Box
			m="40px 0 0 0"
			height="75vh"
			sx={{
				"& .MuiDataGrid-root": {
					border: "none",
				},
				"& .MuiDataGrid-cell": {
					borderBottom: "none",
				},
				"& .name-column--cell": {
					color: colors.greenAccent[300],
				},
				"& .MuiDataGrid-columnHeaders": {
					backgroundColor: colors.blueAccent[700],
					borderBottom: "none",
				},
				"& .MuiDataGrid-virtualScroller": {
					backgroundColor: colors.primary[400],
				},
				"& .MuiDataGrid-footerContainer": {
					borderTop: "none",
					backgroundColor: colors.blueAccent[700],
				},
				"& .MuiCheckbox-root": {
					color: `${colors.greenAccent[200]} !important`,
				},
			}}
		>
			<DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
		</Box>
	</Box>
}