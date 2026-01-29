import { useEffect, useState } from "react";

const usejokes = () => {
  const [jokes, setJokes] = useState([]);   // ARRAY
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://api.freeapi.app/api/v1/public/randomjokes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to get jokes from API");
        }
        return res.json();
      })
      .then((data) => {
        setJokes(data.data.data); // 👈 correct path
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return { jokes, isLoading, error };
};

export default usejokes;
