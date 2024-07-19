import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [btcData, setBtcData] = useState({});

  const fetchData = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((data) => setBtcData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(btcData).length > 0 ? (
    <div className="App">
      <header className="App-header">
        <h1>Current BTC/USD data</h1>
        <p>Code: {btcData.bpi.USD.code}</p>
        <p>Symbol: {btcData.bpi.USD.symbol}</p>
        <p>Rate: {btcData.bpi.USD.rate}</p>
        <p>Description: {btcData.bpi.USD.description}</p>
        <p>Rate Float: {btcData.bpi.USD.rate_float}</p>{" "}
      </header>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
