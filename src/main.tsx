import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ConfigsProvider from './context/config-context'
import configData from "../public/conf/config.json";
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigsProvider configJson={configData}>
    <App />
    </ConfigsProvider>
  </React.StrictMode>
)
