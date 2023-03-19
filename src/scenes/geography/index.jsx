import { Box } from "@mui/material";
import Header from "../component/Header";
import GeographyChart from "../component/GeographyChart";

const Geography = () => {
	return (
		<Box m="20px">
			<Header title="GEOGRAPHY CHART" subtitle="A Simple Geography Chart" />
			<Box height="75vh">
				<GeographyChart />
			</Box>
		</Box>
	);
};

export default Geography;
