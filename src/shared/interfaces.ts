interface Thumbnail {
	path: string
	extension: string
}

export interface Character {
	id: number
	name: string
	description: string
	thumbnail: Thumbnail
	urls: { url: string }[]
	comics?: Comics[]
}

interface Comics {
	id: number
	title: string
}
