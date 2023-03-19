import { Box } from "@mui/material";
import Header from "../component/Header";
import GeographyChart from "../component/GeographyChart";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Geography = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m="20px">
			<Header title="GEOGRAPHY CHART" subtitle="A Simple Geography Chart" />
			<Box mt="15px">
				<Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
					<GeographyChart />
				</Box>
			</Box>
		</Box>
	);
};

export default Geography;
