const quotes = [
  'The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt',
  'In the middle of every difficulty lies opportunity. - Albert Einstein',
  'Happiness is not something ready made. It comes from your own actions. - Dalai Lama',
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQute() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateRandomQute);
