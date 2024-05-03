<template>
  <div>
    <button @click="getWeather">Get Weather Forecast</button>
    <h1>Weather Forecast</h1>
    <div v-if="weather">
      <p v-if="weather.name && weather.sys && weather.sys.country">
        <strong>Location:</strong> {{ weather.name }}, {{ weather.sys.country }}
      </p>
      <p v-if="weather.weather && weather.weather.length > 0">
        <strong>Current Weather:</strong> {{ weather.weather[0].description }}
      </p>
      <p v-if="weather.main">
        <strong>Temperature:</strong> {{ weather.main.temp }}°C
      </p>
      <p v-if="weather.main">
        <strong>Humidity:</strong> {{ weather.main.humidity }}%
      </p>
      <p v-if="weather.wind">
        <strong>Wind Speed:</strong> {{ weather.wind.speed }} m/s
      </p>
    </div>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const weather = ref(null);
    const error = ref(null);

    const getWeather = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/weather');
        if (response.data) {
          weather.value = response.data;
          error.value = null; // Clear any previous error
        } else {
          error.value = "Empty or invalid weather data received";
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        error.value = "Failed to fetch weather data";
      }
    };

    return {
      weather,
      error,
      getWeather
    };
  }
};
</script>
