import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import React, { useState } from 'react';
import "react-pro-sidebar/dist/css/styles.css";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import {
	BarChartOutlined,
	CalendarTodayOutlined,
	ContactsOutlined, HelpOutlineOutlined,
	HomeOutlined, MapOutlined,
	MenuOutlined,
	PeopleOutlined,
	PersonOutlined, PieChartOutlineOutlined,
	ReceiptOutlined, TimelineOutlined
} from '@mui/icons-material';

interface IItemProps  {
	title: string;
	to: string;
	icon: any;
	selected: string;
	setSelected: (val: string) => void;
}

const Item = ({ title, to, icon, selected, setSelected }: IItemProps) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<MenuItem
			active={selected === title}
			style={{
				color: colors.grey[100],
			}}
			onClick={() => setSelected(title)}
			icon={icon}
		>
			<Typography>{title}</Typography>
			<Link to={to} />
		</MenuItem>
	);
};

export const Sidebar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState('Dashboard');

	return (
		<Box sx={{
			'& .pro-sidebar-inner': { background: `${colors.primary[400]} !important` },
			'& .pro-icon-wrapper': { background: 'transparent !important' },
			'& .pro-inner-item': { padding: '5px 35px 5px 20px !important' },
			'& .pro-inner-item:hover': { color: '#868dfb !important' },
			'& .pro-menu-item.active': { color: '#6870fa !important' },
		}}>
			<ProSidebar collapsed={isCollapsed}>
				<Menu iconShape="square">
					{/* LOGO AND MENU ICON */}
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlined /> : undefined}
						style={{
							margin: "10px 0 20px 0",
							color: colors.grey[100],
						}}
					>
						{!isCollapsed && (
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								ml="15px"
							>
								<Typography variant="h3" color={colors.grey[100]}>
									ADMINIS
								</Typography>
								<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
									<MenuOutlined />
								</IconButton>
							</Box>
						)}
					</MenuItem>

					{!isCollapsed && (
						<Box mb="25px">
							<Box textAlign="center">
								<Typography
									variant="h2"
									color={colors.grey[100]}
									fontWeight="bold"
									sx={{ m: "10px 0 0 0" }}
								>
									Ed Roh
								</Typography>
								<Typography variant="h5" color={colors.greenAccent[500]}>
									VP Fancy Admin
								</Typography>
							</Box>
						</Box>
					)}
					<Box paddingLeft={isCollapsed ? undefined : "10%"}>
						<Item
							title="Dashboard"
							to="/"
							icon={<HomeOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>

						<Typography
							variant="h6"
							color={colors.grey[300]}
							sx={{ m: "15px 0 5px 20px" }}
						>
							Data
						</Typography>
						<Item
							title="Manage Team"
							to="/team"
							icon={<PeopleOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Contacts Information"
							to="/contacts"
							icon={<ContactsOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Invoices Balances"
							to="/invoices"
							icon={<ReceiptOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>

						<Typography
							variant="h6"
							color={colors.grey[300]}
							sx={{ m: "15px 0 5px 20px" }}
						>
							Pages
						</Typography>
						<Item
							title="Profile Form"
							to="/form"
							icon={<PersonOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Calendar"
							to="/calendar"
							icon={<CalendarTodayOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="FAQ Page"
							to="/faq"
							icon={<HelpOutlineOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>

						<Typography
							variant="h6"
							color={colors.grey[300]}
							sx={{ m: "15px 0 5px 20px" }}
						>
							Charts
						</Typography>
						<Item
							title="Bar Chart"
							to="/bar"
							icon={<BarChartOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Pie Chart"
							to="/pie"
							icon={<PieChartOutlineOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Line Chart"
							to="/line"
							icon={<TimelineOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Geography Chart"
							to="/geography"
							icon={<MapOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
					</Box>
				</Menu>
			</ProSidebar>
		</Box>
	)
}