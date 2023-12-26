function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const newTask = newTaskInput.value.trim();
    if (newTask !== '') {
        const li = document.createElement('li');
        li.textContent = newTask;
        const todoListElement = document.getElementById('todo-list');
        todoListElement.appendChild(li);
        newTaskInput.value = '';
    }
}
const quotes = [
    'Time Can Never Be Bought',
    'Even the Angels Fall, It is Okay!',
    'Good Intentions',
    'Everything Happens For A Reason',
    'Merry Christmas',
    // Add more quotes as needed
];
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('random-quote').textContent = randomQuote;
}
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    let convertedAmount;
    // Improved currency conversion rates
    const conversionRates = {
        'inr-usd': 0.014, // INR to USD
        'inr-eur': 0.012, // INR to EUR
        'inr-gbp': 0.011, // INR to GBP
        'usd-inr': 73.45, // USD to INR
        'eur-inr': 85.28, // EUR to INR
        'gbp-inr': 92.77, // GBP to INR
        'usd-eur': 0.85,  // USD to EUR
        'usd-gbp': 0.75,  // USD to GBP
        'eur-usd': 1.18,  // EUR to USD
        'eur-gbp': 0.89,  // EUR to GBP
        'gbp-usd': 1.33,  // GBP to USD
        'gbp-eur': 1.12,  // GBP to EUR
    };
    const conversionKey = `${fromCurrency}-${toCurrency}`;
    if (conversionRates.hasOwnProperty(conversionKey)) {
        convertedAmount = amount * conversionRates[conversionKey];
        document.getElementById('converted-amount').textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;
    } else {
        document.getElementById('converted-amount').textContent = 'Invalid Currency Pair';
    }
}
// Add this at the end of your existing JavaScript
// Custom cursor movement
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});
// Custom cursor hover effect on widgets
const widgets = document.querySelectorAll('.widget');
widgets.forEach((widget) => {
    widget.addEventListener('mouseenter', () => {
        document.querySelector('.custom-cursor').style.width = '40px';
        document.querySelector('.custom-cursor').style.height = '40px';
    });
    widget.addEventListener('mouseleave', () => {
        document.querySelector('.custom-cursor').style.width = '20px';
        document.querySelector('.custom-cursor').style.height = '20px';
    });
});
// ... Your existing JavaScript ...
// Custom cursor movement
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
// Add this function to your existing JavaScript
function fetchNews() {
    const newsListElement = document.getElementById('news-list');
    newsListElement.innerHTML = ''; // Clear existing news items
    // Replace the API_KEY with your own API key
    const API_KEY = '3ff062c3cd18406784c88e5053d01435';
    const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    fetch(NEWS_API_URL)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles.slice(0, 5); // Limit to the first five articles
            articles.forEach(article => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
                newsListElement.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
}
let displayValue = '';
function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}
function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
function updateDisplay() {
    document.getElementById('calc-display').value = displayValue;
}
// Image Gallery
function uploadImage() {
    const input = document.getElementById('image-upload');
    const preview = document.getElementById('image-preview');
    input.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                // Display the uploaded image
                preview.innerHTML = '';
                preview.appendChild(img);
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
    // Show the image upload input
    input.click();
}
// Feedback Form
function submitFeedback() {
    const feedbackText = document.getElementById('feedback').value;
    const feedbackMessage = document.getElementById('feedback-message');

    if (feedbackText.trim() === '') {
        feedbackMessage.textContent = 'Please enter your feedback.';
        feedbackMessage.style.color = '#dc3545'; // Red color
    } else {
        // Process feedback (you can customize this part)
        feedbackMessage.textContent = 'Thank you for your feedback!';
        feedbackMessage.style.color = '#28a745'; // Green color
        document.getElementById('feedback').value = ''; // Clear the feedback text
    }
}
// Weather Widget
function getWeather() {
    const apiKey = '444b04107ede1fa3a66aac35fc5945b7'; // Replace with your actual API key
    const city = 'Bangalore'; // Replace with your desired city

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=444b04107ede1fa3a66aac35fc5945b7`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('location').textContent = data.name;
            const temperature = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
            document.getElementById('temperature').textContent = `${temperature}°C`;
            document.getElementById('description').textContent = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
            document.getElementById('icon').style.backgroundImage = `url(${iconUrl})`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
// Fetch weather data on page load
document.addEventListener('DOMContentLoaded', getWeather);
