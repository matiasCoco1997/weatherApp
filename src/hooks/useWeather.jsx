import { useEffect, useState } from "react";

export default function useWeather(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const apiBaseUrl = "http://api.weatherapi.com/v1/current.json";
    setLoading(true);
    setError(null);

    fetch(`${apiBaseUrl}?key=${apiKey}&q=${city}`)
      .then((response) => {
        if (!response.ok)
          throw new Error("Error al obtener los datos del clima");
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [city]);

  return { data, loading, error };
}
