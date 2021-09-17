import axios from 'axios';

export default class GrammarBot {
	private api_key: string = undefined;
	private language: LangCodes = 'en-US';
	private base_uri: string = undefined;
	private reqParams: {
		'x-rapidapi-key': string;
		'x-rapidapi-host': string;
		'content-type': string;
	} = undefined;
	private reqFormEncode: {
		text?: string;
		language: LangCodes;
	} = undefined;
	private host: string = undefined;
	constructor(params: GrammarInitParams) {
		this.api_key = params.api_key || this.api_key;
		this.base_uri = params.base_uri || 'grammarbot.p.rapidapi.com';
		this.language = params.language || 'en-US';
		this.host = params.host;
		this.reqParams = {
			'x-rapidapi-key': this.api_key,
			'x-rapidapi-host': this.base_uri,
			'content-type': 'application/x-www-form-urlencoded',
		};
		this.reqFormEncode = {
			language: this.language,
		};
	}
	get_urlencoded(text: string): URLSearchParams {
		return new URLSearchParams({
			...this.reqFormEncode,
			text: text,
		});
	}
	async checkAsync(text: string): Promise<GrammarBotResponse> {
		let encoded = this.get_urlencoded(text);

		try {
			let result = (
				await axios.post(this.host, encoded, {
					headers: this.reqParams,
					method: 'POST',
				})
			).data as GrammarBotResponse;
			return result;
		} catch (err) {
			return Promise.reject(err);
		}
	}
}
