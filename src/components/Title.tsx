import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { bodyStyle, subtitleStyle, titleStyle } from "./styles";
import { TitleProps } from "../types";

const Title = (p: TitleProps) => {
	return (
		<Container>
			<Typography style={titleStyle} paddingTop={2} variant="h1" align="center">
				{p.title}
			</Typography>
			<Typography style={subtitleStyle} variant="body1" align="center">
				{p.subtitle}
			</Typography>
			{p.text.map((item) => (
				<Typography key={item} style={bodyStyle} variant="body1" align="center">
					{item}
				</Typography>
			))}
			<Divider sx={{ padding: 1 }} />
		</Container>
	);
};

export default Title;
