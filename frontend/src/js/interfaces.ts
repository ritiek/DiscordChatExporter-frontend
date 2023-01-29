export interface Guild {
	_id: string;
	name: string;
	icon: Asset;
}

export interface Asset {
	_id: string;
	originalPath: string;
	localPath: string;
	remotePath: string;
	path: string;
	extension: string;
	type: "image" | "video" | "audio" | "unknown";
	width: number;
	height: number;
	sizeBytes: number;
	filenameWithHash: string;
	filenameWithoutHash: string;
	colorDominant: null | [number, number, number];
	colorPalette: null | [number, number, number][];
}

export interface Channel {
	_id: string;
	type: "GuildTextChat" | "GuildVoiceChat" | "GuildCategory";
	categoryId: string;
	category: string;
	name: string;
	topic: string | null;
	guildId: string;
}

export interface Author {
	name: string;
	discriminator: string;
	nickname: string;
	color: string;
	isBot: boolean;
	avatar: Asset;
	_id: string;
}

export interface Sticker {
	name: string;
	format: "Png" | "Apng" | "Lottie";
	_id: string;
	source: Asset;
}

export interface Reaction {
	emoji: {
		id: string;
		name: string;
		isAnimated: boolean;
		image: Asset;
	}[];
	count: number;
}

export interface Mention {
	name: string;
	discriminator: string;
	nickname: string;
	isBot: boolean;
	_id: string;
}


export interface Message {
	_id: string;
	type: "Reply";
	timestamp: string;
	timestampEdited: string | null;
	callEndedTimestamp: string | null;
	isPinned: boolean;
	content: {
		timestamp: string;
		content: string;
	}[];
	author: Author;
	stickers: Sticker[] | null;
	reactions: Reaction[] | null;
	mentions: Mention[] | null;
	attachments: Asset[] | null;
	reference: {
		messageId: string;
		channelId: string;
		guildId: string;
	} | null;
	guildId: string;
	channelId: string;
}

