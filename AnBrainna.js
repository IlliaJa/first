'use strict';

const events = require('events');
const emitter = new events.EventEmitter();

function PhraseFactory(text) {
    return (name)=>{name, text};
}
function mixinText (func) {
	func.text = '';
	return func.text = (words) => {
		func.text = words;
	};
}

const GoodPhrase = PhraseFactory('Аня, ты как лучик солнца в пасмурный день');
const BadPhrase = PhraseFactory('приффки');
const Phrase = PhraseFactory ('           ');

mixinText(GoodPhrase)('Аня, ты как лучик солнца в пасмурный день');
mixinText(BadPhrase)('приффки');
mixinText(Phrase)('           ');

//console.log(BadPhrase.text);
emitter.on('Аня, ты как лучик солнца в пасмурный день', (name) => {
	console.log('Спасибо, ' + name + '     *краснеет*');
  
});
emitter.on('приффки', (name) => {
	console.log('Насти на тебя не хватает, ' + name);
});
emitter.on('           ', (name) => {
	console.log('*поднять бровь* ' + name);
});

const event = (Phrase, name) => {
	console.log(name + ' глаголит: ' + Phrase.text);
	emitter.emit(Phrase.text, name);
};
event(GoodPhrase,'Феофан');
event(Phrase, 'Настасья');

let collectionOfPhrases = ["ммм", "не знаю", "давай завтра", "позже поговорим", "давай потом", "ты правда хочешь знать?", "ну ты же понимаешь", "*подять бровь*", "хочу спать", "хочу домой", 'хочу к маме на ручки', 'спокойной ночи', 'Ты играешь с огнём'];
let a = Math.round(Math.random() * collectionOfPhrases.length);
const fnk = () => console.log(collectionOfPhrases[a]);
fnk();