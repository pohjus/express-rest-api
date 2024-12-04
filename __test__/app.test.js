const request = require("supertest");

const { app, locations, resetState } = require("../app");

describe("RESTful API Tests", () => {
  // Reset the in-memory database before each test
  beforeEach(() => {
    resetState();
  });
  it("should create a new location", async () => {
    const response = await request(app).post("/api/locations").send({
      latitude: 40.7128,
      longitude: -74.006,
    });

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      latitude: 40.7128,
      longitude: -74.006,
    });
  });

  it("should return all locations", async () => {
    await request(app).post("/api/locations").send({
      latitude: 34.0522,
      longitude: -118.2437,
    });

    const response = await request(app).get("/api/locations");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });

  it("should delete a location", async () => {
    console.log("locations array" + locations);
    await request(app).post("/api/locations").send({
      latitude: 40.7128,
      longitude: -74.006,
    });
    console.log("locations array" + JSON.stringify(locations));

    const response = await request(app).delete("/api/locations/1");
    expect(response.status).toBe(204);

    const allLocations = await request(app).get("/api/locations");
    expect(allLocations.body).toHaveLength(0);
  });

  it("should validate latitude and longitude", async () => {
    const response = await request(app).post("/api/locations").send({
      latitude: 200, // Invalid latitude
      longitude: -300, // Invalid longitude
    });

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      success: false,
      errors: [
        {
          field: "latitude",
          message: "Latitude must be a number between -90 and 90",
        },
        {
          field: "longitude",
          message: "Longitude must be a number between -180 and 180",
        },
      ],
    });
  });
});
