import text from './content.js';

const converter = new showdown.Converter();
const html      = converter.makeHtml(text);

document.querySelector('main').innerHTML = html;
