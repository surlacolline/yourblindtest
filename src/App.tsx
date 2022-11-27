import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {ConfigContext} from "./context/config-context";


function App() {
  const [count, setCount] = useState(0)
  const [weather, setWeather] = useState(0)
  const {configs, addConfig} = useContext(ConfigContext);

  useEffect(()=> {
    const weatherurl = "https://localhost:49153/WeatherForecast";
    //const weatherurl = "https://yourblindtest-api.herokuapp.com/weatherforecast";
    fetch(weatherurl)
    .then((response) => response.json())
    .then((data) => {
     setWeather(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React {configs.theme}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <span>{weather.toString()}</span>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
