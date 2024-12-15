import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      console.log(`${import.meta.env.VITE_API_URL}/api/locations`);

      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/locations`
        );

        setLocations(data);
      } catch (err) {
        handleAxiosError(err);
      }
    };

    fetchLocations();
  }, []);

  const handleAxiosError = (err) => {
    if (err.response) {
      setError(
        `Error: ${err.response.status} - ${err.response.data.message || "Server Error"}`
      );
    } else if (err.request) {
      setError(
        "Error: No response received from server. Please try again later."
      );
    } else {
      setError(`Error: ${err.message}`);
    }
    console.error(err);
  };

  return (
    <div>
      <h1>Location Data</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <ul>
          {locations.map((location, index) => (
            <li key={index}>
              Latitude: {location.latitude}, Longitude: {location.longitude}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
