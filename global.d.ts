declare type LangCodes =
	| 'ast-ES'
	| 'be-BY'
	| 'br-FR'
	| 'ca-ES'
	| 'ca-ES-valencia'
	| 'da-DK'
	| 'de'
	| 'de-AT'
	| 'de-CH'
	| 'de-DE'
	| 'de-DE-x-simple-language'
	| 'el-GR'
	| 'en'
	| 'en-AU'
	| 'en-CA'
	| 'en-GB'
	| 'en-NZ'
	| 'en-US'
	| 'en-ZA'
	| 'eo'
	| 'es'
	| 'fa'
	| 'fr'
	| 'gl-ES'
	| 'it'
	| 'ja-JP'
	| 'km-KH'
	| 'nl'
	| 'pl-PL'
	| 'pt'
	| 'pt-AO'
	| 'pt-BR'
	| 'pt-MZ'
	| 'pt-PT'
	| 'ro-RO'
	| 'ru-RU'
	| 'sk-SK'
	| 'sl-SI'
	| 'sr'
	| 'sr-BA'
	| 'sr-HR'
	| 'sr-ME'
	| 'sr-RS'
	| 'sv'
	| 'ta-IN'
	| 'tl-PH'
	| 'uk-UA'
	| 'zh-CN';

declare interface GrammarBotMatch {
	message: string;
	shortMessage: string;
	replacements: { value: string }[];
	offset: number;
	length: number;
	context?: { text: string; offset: number; length: number };
	sentence: string;
	type: { typeName: string };
	rule: {
		id: string;
		description: string;
		issueType: string;
		category: { id: string; name: string };
	};
}

declare interface GrammarBotResponse {
	software: {
		name: string;
		version: string;
		apiVersion: number;
		premium: boolean;
		premiumHint: string;
		status: string;
	};
	warnings: Record<string, any>;
	language: {
		name: string;
		code: string;
		detectedLanguage: { name: string; code: string };
	};
	matches: Array<GrammarBotMatch>;
}

declare interface GrammarInitParams {
	api_key: string;
	language?: LangCodes;
	base_uri?: string;
	host: string;
}
