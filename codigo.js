const claveApi = '357379d8563543ad88004403252504'
const idioma = 'es'
const inpCiudad= document.getElementById('input-ciudad')
const climaContenedor = document.getElementById('clima-contenedor'); 

async function obtenerClima() {
    const ciudad = inpCiudad.value;

    if (!ciudad) {
        alert('Por favor, ingresa una ciudad.');
        return;
    }

    try {
        const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`
        const response = await fetch(apiClimaActual)
        
        if (!response.ok) {
            throw new Error('Ciudad no encontrada');
        }
        
        const data = await response.json();
        mostrarClima(data);
        climaContenedor.style.display = 'block';
        
    } catch (error) {
        alert(error.message);
        climaContenedor.style.display = 'none';
    }
}

function mostrarClima(data) {
    document.querySelector('.clima-icono').src = data.current.condition.icon;
    document.querySelector('.clima-texto').textContent = data.current.condition.text;
    document.querySelector('.Temp').textContent = data.current.temp_c + '°C';
    document.querySelector('.ciudad').textContent = data.location.name;
    document.querySelector('.humedad').textContent = data.current.humidity + '%';
    document.querySelector('.viento').textContent = data.current.wind_kph + ' km/h';
    

}