import useWeather from "../hooks/useWeather";

export default function Weather() {
  const city = "London";
  const { data, loading, error } = useWeather(city);

  return (
    <>
      <div id="weather" className="bg-red-500">
        <p className="p-4">
          Locación buscada: <span id="location"></span>
        </p>
        <p className="p-4">
          Temperatura: <span id="temp"></span> °C
        </p>
        <p className="p-4">
          Condición: <span id="condition"></span>
        </p>
        <p className="p-4">
          Humedad: <span id="humidity"></span>%
        </p>
        <p className="p-4">
          Velocidad del viento: <span id="wind"></span> km/h
        </p>
      </div>
    </>
  );
}
