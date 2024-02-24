//--------JAVASCRIPT FUNCION--------//

function getWeather() {
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var apiKey = "e343776aafe79e4f6189dce303f7cab3"; // Coloque sua API KEY aqui para que o código funcione -- https://openweathermap.org/api
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}&lang=pt_br`;
 
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao obter os dados. Verifique a cidade, o estado e o país e tente novamente.');
        }
        return response.json();
    })
    .then(data => {
        var desc = data.weather[0].description;
        var temperature = (data.main.temp - 273.15).toFixed(1) + "°C";
        var iconCode = data.weather[0].icon;
        var iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
 
        var resultElement = document.getElementById("result");
        resultElement.innerHTML = `<p>${desc}, ${temperature}</p>`;
        resultElement.innerHTML += `<img src="${iconUrl}" alt="Weather Icon">`;
 
        resultElement.style.color = "white"; // Change text to white
    })
    .catch(error => {
        console.error('Erro:', error);
        var resultElement = document.getElementById("result");
        resultElement.innerHTML = error.message;
        resultElement.style.color = "red"; // Change text to red
    });
 }