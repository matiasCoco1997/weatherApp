import { useEffect } from "react";
import useWeather from "../hooks/useWeather";

export default function Weather() {
  const city = "London";
  const { data, loading, error } = useWeather(city);

  useEffect(() => {
    console.log(data, loading, error);
  }, [data, loading, error]);

  return (
    <>
      <h1 className="text-2xl font-bold text-center pt-4">Weather App</h1>
      <p className="text-center">Get the latest weather updates!</p>
    </>
  );
}
