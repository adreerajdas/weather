document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '03350b88af18053faef0ae657b901475'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Bro City not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('city-name').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
            document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
        })
        .catch(error => {
            document.getElementById('city-name').textContent = '';
            document.getElementById('temperature').textContent = '';
            document.getElementById('description').textContent = 'Error: ' + error.message;
        });
});
