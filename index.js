import quotes from './src/quotes.js';
import {
  removeFavoriteCard,
  showFavoriteCard,
  toggleFavoritIcon,
} from './src/favoritesHandler.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author: quoteAuthor } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = quoteAuthor;
  toggleFavoritIcon(randomQuote.isFavorite, toggleFavoriteBtn);
  // toggleFavoriteBtn.textContent = randomQuote.isFavorite // Меняем текст на кнопке добавления цитаты и избранные проверив isFavorite
  //   ? 'Remove from favorite'
  //   : 'Add to favorite';

  toggleFavoriteBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoritIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  currentQuote.isFavorite
    ? showFavoriteCard(
        currentQuoteIndex,
        currentQuote.quote,
        currentQuote.author,
        favoritesContainer
      )
    : removeFavoriteCard(currentQuoteIndex);

  // toggleFavoriteBtn.textContent = currentQuote.isFavorite // Меняем текст на кнопке добавления цитаты и избранные проверив isFavorite
  //   ? 'Remove from favorite'
  //   : 'Add to favorite';
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);
