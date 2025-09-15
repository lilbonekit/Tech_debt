type Thumbnail = {
	path: string;
	extension: string;
};

export interface IChar {
	id: number;
	name: string;
	description: string;
	thumbnail: Thumbnail;
	urls: { url: string }[];
	comics: {};
}
