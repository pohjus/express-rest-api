const { app } = require("./app");

const port = 3000;

const server = app.listen(port, () => {
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
