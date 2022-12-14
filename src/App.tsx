import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ConfigContext } from "./context/config-context";
import GameMenuPage from "./features/game-menu/GameMenuPage";

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
      {/* nav */}
      <GameMenuPage></GameMenuPage>
      {/* footer */}
    </div>
  );
}

export default App;
