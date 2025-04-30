const express = require("express");
const { Pool } = require("pg");
const moment = require("moment-timezone");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

// PostgreSQL connection setup
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

// Initialize database tables
async function initializeDb() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS baby_eat (
        id SERIAL PRIMARY KEY,
        timestamp TIMESTAMP NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS baby_poop (
        id SERIAL PRIMARY KEY,
        timestamp TIMESTAMP NOT NULL
      );
    `);
    console.log("Database tables initialized");
  } catch (error) {
    console.error("Error initializing database tables:", error);
  }
}

initializeDb();

// Routes
// Add eating event
app.post("/baby-eat", async (req, res) => {
  try {
    const romanianTime = moment()
      .tz("Europe/Bucharest")
      .format("YYYY-MM-DD HH:mm:ss");
    const result = await pool.query(
      "INSERT INTO baby_eat (timestamp) VALUES ($1) RETURNING *",
      [romanianTime]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error adding eat event:", error);
    res.status(500).json({ error: "Failed to add eat event" });
  }
});

// Add poop event
app.post("/baby-poop", async (req, res) => {
  try {
    const romanianTime = moment()
      .tz("Europe/Bucharest")
      .format("YYYY-MM-DD HH:mm:ss");
    const result = await pool.query(
      "INSERT INTO baby_poop (timestamp) VALUES ($1) RETURNING *",
      [romanianTime]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error adding poop event:", error);
    res.status(500).json({ error: "Failed to add poop event" });
  }
});

// Get last eat event
app.get("/baby-eat/last", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM baby_eat ORDER BY timestamp DESC LIMIT 1"
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No eat events found" });
    }

    const formattedTimestamp = moment(result.rows[0].timestamp);

    res.json({ timestamp: formattedTimestamp.format("DD/MM/YYYY HH:mm:ss") });
  } catch (error) {
    console.error("Error fetching last eat event:", error);
    res.status(500).json({ error: "Failed to fetch last eat event" });
  }
});

// Get last eat event with formatted timestamp
app.get("/baby-eat/last/formatted", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT timestamp FROM baby_eat ORDER BY timestamp DESC LIMIT 1"
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No eat events found" });
    }

    const formattedTimestamp = moment(result.rows[0].timestamp);

    res.json({
      timestamp: formattedTimestamp,
      formatted: formattedTimestamp.format("DD/MM/YYYY HH:mm:ss"),
    });
  } catch (error) {
    console.error("Error fetching last eat event:", error);
    res.status(500).json({ error: "Failed to fetch last eat event" });
  }
});

// Get all eat events
app.get("/baby-eat/all", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM baby_eat ORDER BY timestamp DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching all eat events:", error);
    res.status(500).json({ error: "Failed to fetch all eat events" });
  }
});

// Get last poop event
app.get("/baby-poop/last", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM baby_poop ORDER BY timestamp DESC LIMIT 1"
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No poop events found" });
    }

    const formattedTimestamp = moment(result.rows[0].timestamp);

    res.json({
      timestamp: formattedTimestamp.format("DD/MM/YYYY HH:mm:ss"),
    });
  } catch (error) {
    console.error("Error fetching last poop event:", error);
    res.status(500).json({ error: "Failed to fetch last poop event" });
  }
});

// Get all poop events
app.get("/baby-poop/all", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM baby_poop ORDER BY timestamp DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching all poop events:", error);
    res.status(500).json({ error: "Failed to fetch all poop events" });
  }
});

// Start the server
const PORT = process.env.PORT || 3024;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
