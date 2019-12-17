/**
 * Configutation options for the person object generated by the mock method
 */
export interface PersonOpts {
	sex: string;
	height: string;
	age: string;
}

/**
 * Configutation options for the mock method
 */
export interface Options {
	/**
	 * The locale used to build generated data, defaults to 'us'
	 */
	locale: string;
	person: PersonOpts;
}

/**
 * The person object generated when mocking data with mock
 */
export interface Person {
	name: string;
	middlename: string;
	initials: string;
	middleInitial: string;
	lastname: string;
	sex: string;
	height: string;
	age: number;
	academicTitle: string;
	nationality: string;
	email: string;
	title: string;
	suffixTitle: string;
}

export interface PicsumBlob {
	blob: Blob | null;
	info: Response | null;
}

export interface PicsumUrl {
	data: string;
	info: string;
}

export interface Random {
	number: number;
	title: string;
	imageUrl: PicsumUrl;
	imageBlob: Promise<PicsumBlob>;
}

export interface Lorem {
	sentence: string;
	paragraph: string;
	text: Function;
}

export interface PicsumOptions {
	grayscale?: boolean;
	blur?: boolean | number;
	ext?: 'jpg' | 'jpeg' | 'webp';
	withInfo?: boolean;
}

export interface UsAddress {
	city: string;
	state: string;
	stateAbbrev: string;
	zipCode: string;
	countryAbbrev: string;
	country: string;
}

export interface UsPhoneNumber {
	country: string;
	countryCode: string;
	cityCode: string;
	subNumber: string;
	number: string;
	withAreaCode: string;
}

/**
 * Specific data generated by mock
 */
export interface Mocked {
	person: Person | undefined;
	phoneNumber: UsPhoneNumber;
	address: UsAddress;
}
