function toggleFavoritIcon(isFavorite, el) {
  el.classList.toggle('fa', isFavorite);
  el.classList.toggle('far', !isFavorite);
}

function showFavoriteCard(id, quote, author, container) {
  // проверяем значение логическое isFavorite
  const favoriteCard = document.createElement('div'); // создаем блок div
  favoriteCard.classList.add('favorite-card'); // присваиваем ему id
  favoriteCard.setAttribute('data-id', id);
  //Добавляем в div два параграфа для цитаты и автора
  favoriteCard.innerHTML = ` 
      <p class="quote-text">${quote}</p>
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

export { toggleFavoritIcon, showFavoriteCard, removeFavoriteCard };
