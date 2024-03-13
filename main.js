const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Stay hungry, stay foolish. - Steve Jobs",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Life is about making an impact, not making an income. - Kevin Kruse",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "If you want to achieve greatness stop asking for permission. - Anonymous",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "You become what you believe. - Oprah Winfrey",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
];

const quoteElement = document.getElementById("quote");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}
