import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./GameMenuPage.scss";
import { ConfigContext } from "../../context/config-context/ConfigContext";
import { SpotifyButton } from "../../components/SpotifyButton";

function GameMenuPage() {
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
    <div className="game-menu">
      <SpotifyButton label={"Connexion"}></SpotifyButton>
      game menu page
        <span>{weather}</span>
    </div>
  );
}

export default GameMenuPage;
