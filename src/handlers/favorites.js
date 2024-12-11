import { currentQuote } from './quote.js';

const toggleBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');
toggleBtn.addEventListener('click', toggleFavorite);

hideBtn(toggleBtn);

function toggleFavorite() {
  currentQuote.isFavorite = !currentQuote.isFavorite;

  toggleFavoritIcon(currentQuote.isFavorite, toggleBtn);
  currentQuote.isFavorite
    ? showFavoriteCard(
        currentQuote.id,
        currentQuote.text,
        currentQuote.author,
        favoritesContainer
      )
    : removeFavoriteCard(currentQuote.id);
}

function handleFavorite(isFavorite) {
  showBtn(toggleBtn);
  toggleFavoritIcon(isFavorite, toggleBtn);
}

function toggleFavoritIcon(isFavorite, el) {
  el.classList.toggle('fa', isFavorite);
  el.classList.toggle('far', !isFavorite);
}

function showBtn(btn) {
  btn.style.display = 'inline-block';
}

function hideBtn(btn) {
  btn.style.display = 'none';
}

function showFavoriteCard(id, text, author, container) {
  // проверяем значение логическое isFavorite
  const favoriteCard = document.createElement('div'); // создаем блок div
  favoriteCard.classList.add('favorite-card'); // присваиваем ему id
  favoriteCard.setAttribute('data-id', id);
  //Добавляем в div два параграфа для цитаты и автора
  favoriteCard.innerHTML = ` 
      <p class="quote-text">${text}</p>
      <p class="author">${author}</p>
    `;
  container.appendChild(favoriteCard); //Добаляем в контейнер, созданный блок
}

function removeFavoriteCard(id) {
  // В противном ищем блок по названию класса

  const card = document.querySelector(`.favorite-card[data-id="${id}"]`);

  if (card) {
    card.remove();
  }

  // Удаляем цитату из избранной
}

export { handleFavorite };
