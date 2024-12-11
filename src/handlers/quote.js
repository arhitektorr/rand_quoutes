import quotes from '../data/quotes.js';

import { generateRandomInt } from '../utils/math.js';
import { handleFavorite } from './favorites.js';
let currentQuote = null;

function displaQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteAuthor = document.getElementById('quote-author');
  quoteElement.textContent = text;
  quoteAuthor.textContent = author;
  handleFavorite(isFavorite);
}

// Возвращает просто цитату
function choseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

function handleQuote() {
  const randomQuote = choseRandomQuote(quotes);
  currentQuote = randomQuote;
  displaQuote(randomQuote);
}

export { handleQuote, currentQuote };
