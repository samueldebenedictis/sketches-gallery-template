import Container from "@mui/material/Container";
import Title from "./components/Title";
import Bottom from "./components/Bottom";
import Gallery from "./components/Gallery";
import { dependenciesData, title, subtitle, text, randomSwitch } from "./dataStatic";
import dataSketches from "./dataSketches.json";

function randomize(
	items: {
		img: string;
		link: string;
		title: string;
	}[],
) {
	items.sort(() => (Math.random() > 0.5 ? 1 : -1));
}

function App() {
	const galleryItems = dataSketches.items;
	if (randomSwitch) {
		randomize(galleryItems);
	}
	return (
		<Container maxWidth="xl">
			<Title {...{ title: title, subtitle: subtitle, text: text }} />
			<Gallery {...{ items: galleryItems }} />
			<Bottom {...{ items: dependenciesData.items }} />
		</Container>
	);
}

export default App;
