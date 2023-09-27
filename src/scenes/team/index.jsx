import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../scenes/component/Header";
import { TrendingUp } from "@mui/icons-material";

const Team = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns = [
		{
			field: "id",
			headerName: "ID",
			width: 10,
		},
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
			width: 10,
		},
		{
			field: "phone",
			headerName: "Phone Number",
			flex: 1,
			hide: true,
		},
		{
			field: "email",
			headerName: "Email",
			flex: 1,
		},
		{
			field: "access",
			headerName: "Access Level",
			flex: 1,
			renderCell: ({ row: { access } }) => {
				return (
					<Box
						width="60%"
						m="0 auto"
						p="5px"
						display="flex"
						justifyContent="space-around"
						backgroundColor={
							access === "admin"
								? colors.greenAccent[600]
								: colors.greenAccent[700]
						}
						borderRadius="4px"
					>
						{access === "admin" && <AdminPanelSettingsOutlinedIcon />}
						{access === "manager" && <SecurityOutlinedIcon />}
						{access === "user" && <LockOpenOutlinedIcon />}
						<Typography color={colors.grey[100]}>{access}</Typography>
					</Box>
				);
			},
		},
	];

	return (
		<Box
			sx={{
				m: {
					xs: "10px",
					md: "20px",
				},
			}}
		>
			<Header title="TEAM" subtitle="Managing the Team Members" />
			<Box
				m={{ xs: "0px", md: "20px" }}
				height="75vh"
				width={{ xs: "80vw", md: "90vw" }}
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-cell": {
						borderButton: "none",
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
				<DataGrid
					checkboxSelection
					rows={mockDataTeam}
					columns={columns}
					sx={{
						"& .MuiDataGrid-windowContainer": {
							overflowX: "hidden",
						},
					}}
				/>
			</Box>
		</Box>
	);
};

export default Team;
