const { app, locations } = require("./app");

const port = 3000;

const populateInitialLocations = () => {
  locations.push(
    { id: 1, latitude: 40.712776, longitude: -74.005974 }, // New York City
    // eslint-disable-next-line prettier/prettier
    { id: 2, latitude: 34.052235, longitude: -118.243683 } // Los Angeles
  );
  console.log("Initial locations populated:", locations);
};

const server = app.listen(port, () => {
  populateInitialLocations(); // Call this function after the server starts

  console.log(`Example app listening on port ${port}`);
});

// Graceful shutdown
const shutdown = () => {
  console.log("\nShutting down gracefully...");
  server.close(() => {
    console.log("Server closed successfully.");
    process.exit(0);
  });

  setTimeout(() => {
    console.error("Forcefully shutting down...");
    process.exit(1);
  }, 5000);
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
