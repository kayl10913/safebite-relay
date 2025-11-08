import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/api/sensor/arduino-data", async (req, res) => {
  const query = new URLSearchParams(req.query).toString();
  const target = `https://safebite-server-zh2r.onrender.com/api/sensor/arduino-data?${query}`;
  console.log("Forwarding to:", target);

  try {
    const response = await fetch(target);
    const text = await response.text();
    res.send(text);
  } catch (error) {
    console.error("Error forwarding:", error);
    res.status(500).send("Error forwarding request");
  }
});

app.listen(3000, () => console.log("✅ Relay active on port 3000"));
