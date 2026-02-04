'use client';

import { useEffect, useState } from 'react';

interface WeatherData {
  lat: string;
  lon: string;
  elevation: number;
  timezone: string;
  current: {
    icon: string;
    icon_num: number;
    summary: string;
    temperature: number;
    wind: {
      speed: number;
      angle: number;
      dir: string;
    };
    precipitation: {
      total: number;
      type: string;
    };
    cloud_cover: number;
  };
}

// Mapping des icônes météo
const getWeatherIcon = (icon: string): string => {
  const iconMap: Record<string, string> = {
    sunny: '☀️',
    mostly_sunny: '🌤️',
    partly_sunny: '⛅',
    mostly_cloudy: '🌥️',
    cloudy: '☁️',
    overcast: '☁️',
    fog: '🌫️',
    light_rain: '🌦️',
    psbl_rain: '🌦️',
    rain: '🌧️',
    heavy_rain: '⛈️',
    thunderstorm: '⛈️',
    light_snow: '🌨️',
    snow: '❄️',
    heavy_snow: '❄️',
    rain_snow: '🌨️',
    ice_pellets: '🧊',
    hail: '🧊',
  };
  return iconMap[icon] || '🌡️';
};

export function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Coordonnées de Chartres
        const lat = '48.4469';
        const lon = '1.4892';

        const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données météo');
        }

        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="p-4 rounded-lg bg-muted">
        <p>Chargement de la météo...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 rounded-lg bg-destructive/10 text-destructive">
        <p>Erreur : {error}</p>
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-slate-900">
      <h2 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-100">Météo à Chartres</h2>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="text-3xl" role="img" aria-label="weather icon">
            {getWeatherIcon(weather.current.icon)}
          </div>
          <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">
            {Math.round(weather.current.temperature)}°
          </p>
          <div className="flex items-center">
            <span className="text-2xl">🚩</span>
            <div>
              <p className="text-xs text-blue-600 dark:text-blue-400">Vent</p>
              <p className="font-semibold text-blue-900 dark:text-blue-100">
                {Math.round(weather.current.wind.speed)} km/h {weather.current.wind.dir}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
