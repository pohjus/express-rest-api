const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();
const port = 3000;

// In-memory database.
const locations = [];
// Counter starts from 1. Yes.
let idCounter = 1;

// Middleware to parse JSON
app.use(express.json());

/**
 * Handle validation errors and return a structured response.
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Object} next - The next middleware function.
 */
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((error) => ({
        field: error.path, // Include the field name that caused the error
        message: error.msg, // Include the error message
      })),
    });
  }

  next();
};

// POST: Add a new location
app.post(
  "/api/locations",
  [
    // Validate latitude
    body("latitude")
      .isFloat({ min: -90, max: 90 })
      .withMessage("Latitude must be a number between -90 and 90"),
    // Validate longitude
    body("longitude")
      .isFloat({ min: -180, max: 180 })
      .withMessage("Longitude must be a number between -180 and 180"),
  ],
  handleValidationErrors,
  (req, res) => {
    // Add new location
    const { latitude, longitude } = req.body;
    const newLocation = { id: idCounter++, latitude, longitude };
    locations.push(newLocation);

    res.status(201).json(newLocation);
  }
);

// GET: Retrieve all locations
app.get("/api/locations", (req, res) => {
  res.status(200).json(locations);
});

// GET: Retrieve a single location by ID
app.get("/api/locations/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const location = locations.find((loc) => loc.id === id);

  if (!location) {
    return res.status(404).json({
      error: `Location with ID ${id} not found`,
    });
  }

  res.status(200).json(location);
});

// DELETE: Delete a location by ID
app.delete("/api/locations/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = locations.findIndex((loc) => loc.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: `Location with ID ${id} not found`,
    });
  }

  // Remove location from the array
  locations.splice(index, 1);
  res.status(204).send();
});

const resetState = () => {
  locations.length = 0;
  idCounter = 1;
};

module.exports = { app, locations, resetState };
// Adding a new feature for testing
