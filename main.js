import text from './Hiring position.js';

const converter = new showdown.Converter();
const html      = converter.makeHtml(text);

document.querySelector('main').innerHTML = html;
