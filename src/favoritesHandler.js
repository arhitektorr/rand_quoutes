function toggleFavoritIcon(isFavorite, el) {
  el.classList.toggle('fa', isFavorite);
  el.classList.toggle('far', !isFavorite);
}

function showFavoriteCard(quote, author, container) {
  // проверяем значение логическое isFavorite
  const favoriteCard = document.createElement('div'); // создаем блок div
  favoriteCard.classList.add('favorite-card'); // присваиваем ему id
  //Добавляем в div два параграфа для цитаты и автора
  favoriteCard.innerHTML = ` 
      <p class="quote-text">${quote}</p>
      <p class="author">${author}</p>
    `;
  container.appendChild(favoriteCard); //Добаляем в контейнер, созданный блок
}

function removeFavoriteCard(quote) {
  // В противном ищем блок по названию класса
  const favoriteCards = document.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    // Удаляем цитату из избранной
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

export { toggleFavoritIcon, showFavoriteCard, removeFavoriteCard };
