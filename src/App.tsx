import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ConfigContext } from "./context/config-context";

function App() {
  const [count, setCount] = useState(0);
  const [weather, setWeather] = useState("");
  const { configs, addConfig } = useContext(ConfigContext);

  useEffect(() => {
    const weatherurl = "https://localhost:49153/WeatherForecast";
    //const weatherurl = "https://yourblindtest-api.herokuapp.com/weatherforecast";
    fetch(weatherurl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const a = JSON.stringify(data);
        setWeather(a);
        console.log(a);
      });
  }, []);

  return (
    <div className="App">
      <h1>Vite + React {configs.theme}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <span>{weather}</span>
      </div>
    </div>
  );
}

export default App;
