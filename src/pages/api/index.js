import express from "express";
import { getAllFlights, getFlightById, getFlightBySrc } from "./db.js";
const app = express();
const PORT = 8080;

app.get("/flights", async (req, res) => {
  const result = await getAllFlights();
  res.send(result);
});
app.get("/flights/:id", async (req, res) => {
  const result = await getFlightById(req.params.id);
  res.send(result);
});
app.get("/flights/:src/:dest", async (req, res) => {
  const result = await getFlightBySrc(req.params.src, req.params.dest);
  res.send(result);
});

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
