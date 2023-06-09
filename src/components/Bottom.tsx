import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BottomProps } from "../types";
import { bodyStyle } from "./styles";

function Bottom(p: BottomProps) {
	return (
		<Container>
			<Divider sx={{ padding: 1 }} />
			<Typography style={bodyStyle} variant="body2" align="center" paddingTop={2}>
				Made with <FavoriteIcon sx={{ color: "red" }} fontSize="small" /> and
			</Typography>
			{p.items.map((item) => (
				<Typography style={bodyStyle} key={item.name} variant="body2" align="center">
					<Link variant="inherit" underline="hover" href={item.link}>
						{item.name}
					</Link>
				</Typography>
			))}
			<Divider sx={{ padding: 1 }} />
		</Container>
	);
}

export default Bottom;
