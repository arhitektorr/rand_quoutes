import quotes from './quotes.js';
// Берем в переменную p куда будем выводить цитаты
const quoteElement = document.getElementById('quote');
// Берем p куда будем выводить автора цитаты
const quoteAuthorElement = document.getElementById('quote-author');
// Получаем доступ к кнопке, который будет генерировать цитаты из списка
const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn'); // получаем доступ к кнопке добавления цитаты в избранные
const favoritesContainer = document.getElementById('favorites-container'); // Получаем блок куда будем выводить избранные цитаты

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length); // Генерируем случайный индекс по длине массива объектов цитат
  const randomQuote = quotes[currentQuoteIndex]; // Присваиваем к переменной случайную цитату
  const { quote, author: quoteAuthor } = randomQuote; // Деструктуируем объект и даем переменным нужные нам названия
  quoteElement.textContent = quote; // Выводим в блок генерированную цитату
  quoteAuthorElement.textContent = quoteAuthor; // Под цитатой выводим имя автора данной цитаты

  toggleFavoriteBtn.textContent = randomQuote.isFavorite // Меняем текст на кнопке добавления цитаты и избранные проверив isFavorite
    ? 'Remove from favorite'
    : 'Add to favorite';

  toggleFavoriteBtn.style.display = 'inline-block'; // Отображаем кнопку добавления в избранное после генерации цитаты
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex]; // Присвоение переменной текущую цитату

  currentQuote.isFavorite = !currentQuote.isFavorite; // Меняем значение isFavorite на обратное (true или false)

  toggleFavoriteBtn.textContent = currentQuote.isFavorite // Меняем текст на кнопке добавления цитаты и избранные проверив isFavorite
    ? 'Remove from favorite'
    : 'Add to favorite';

  if (currentQuote.isFavorite) {
    // проверяем значение логическое isFavorite
    const favoriteCard = document.createElement('div'); // создаем блок div
    favoriteCard.classList.add('favorite-card'); // присваиваем ему id
    //Добавляем в div два параграфа для цитаты и автора
    favoriteCard.innerHTML = ` 
      <p class="quote-text">${currentQuote.quote}</p>
      <p class="author">${currentQuote.author}</p>
    `;
    favoritesContainer.appendChild(favoriteCard); //Добаляем в контейнер, созданный блок
  } else {
    // В противном ищем блок по названию класса
    const favoriteCards = document.querySelectorAll('.favorite-card');

    favoriteCards.forEach((card) => {
      // Удаляем цитату из избранной
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);
