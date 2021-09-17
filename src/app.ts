require('dotenv').config();
import GrammarBot from './grammar-bot';

const run = async (sentence: string, language: LangCodes) => {
	const bot = new GrammarBot({
		api_key: process.env.RAPIDAPI_KEY,
		base_uri: process.env.BASE_API_URL,
		language,
		host: 'https://grammarbot.p.rapidapi.com/check',
	});
	let result = await bot.checkAsync(sentence);
	if (result && result.matches) {
		let matches = result.matches;
		matches = matches.sort((a, b) => a.offset - b.offset);
		let offsets = matches.map((e) => {
			return [e.offset, e.length, e.replacements[0].value];
		});
		let pieces: string[] = [];
		let totalLen = 0;
		for (let x of offsets) {
			let start = sentence.slice(totalLen, x[0] as number);
			pieces.push(start);
			pieces.push(x[2] as string);
			totalLen = (x[0] as number) + (x[1] as number);
		}
		pieces.push(sentence.slice(totalLen, sentence.length));
		return pieces.join('');
	}
};

run('...something...', 'en-US');
