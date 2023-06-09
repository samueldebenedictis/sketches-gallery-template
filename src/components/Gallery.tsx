import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "@mui/material/Link";
import { GalleryProps } from "../types";
import { blackAndWhiteSwitch } from "../dataStatic";

const blackAndWhite = blackAndWhiteSwitch ? { filter: "saturate(0)" } : {};

function Gallery(p: GalleryProps) {
	return (
		<ImageList gap={10} cols={3} rowHeight={"auto"}>
			{p.items.map((item) => {
				return (
					<Link href={item.link} key={item.title}>
						<ImageListItem>
							<img style={blackAndWhite} src={item.img} alt={item.title} loading="lazy" />
						</ImageListItem>
					</Link>
				);
			})}
		</ImageList>
	);
}

export default Gallery;
