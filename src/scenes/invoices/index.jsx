import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../component/Header";

const Invoices = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns = [
		{
			field: "id",
			headerName: "ID",
		},
		{
			field: "name",
			headerName: "Name",
			cellClassName: "name-column--cell",
			flex: 1,
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
			field: "cost",
			headerName: "Cost",
			flex: 1,
			renderCell: (params) => (
				<Typography color={colors.greenAccent[500]}>
					${params.row.cost}
				</Typography>
			),
		},
		{
			field: "date",
			headerName: "Date",
			flex: 1,
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
			<Header title="INVOICES" subtitle="List of Invoice Balances" />
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
				<DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
			</Box>
		</Box>
	);
};

export default Invoices;
