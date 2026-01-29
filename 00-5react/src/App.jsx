import React, { useEffect, useState } from "react";
import ChaiOrders from "./ChaiOrders";
import Quotemennu from "./quotemennu.jsx";
import usejokes from "./hooks/jokes.js";

function App() {
  const [quote, setQuote] = useState("Old is gold");

  // ✅ CALL the hook
  const { jokes, isLoading, error } = usejokes();

  // Quote fetch
  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
      .then((res) => res.json())
      .then((data) => setQuote(data.data.content))
      .catch(() => setQuote("Error fetching quote"));
  }, []);

  if (isLoading) return <h2>Loading jokes...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>Hey</h1>
      <h6>Yash here</h6>
      <h3>{quote}</h3>

      <ChaiOrders />
      <Quotemennu />

      <h2>Jokes</h2>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>{joke.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
