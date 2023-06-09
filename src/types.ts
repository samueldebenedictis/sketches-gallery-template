export type TitleProps = {
	title: string;
	subtitle: string;
	text: string[];
};

export type GalleryProps = {
	items: {
		title: string;
		img: any;
		link: any;
	}[];
};

export type BottomProps = {
	items: { name: string; link: string }[];
};

export {};
