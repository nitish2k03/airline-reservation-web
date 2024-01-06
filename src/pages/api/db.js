import mysql from "mysql2";
const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "airline",
  })
  .promise();

export async function getAllFlights() {
  const [rows] = await pool.query("SELECT * FROM flights");
  return rows;
}

export async function getFlightById(id) {
  const [rows] = await pool.query("SELECT * FROM flights WHERE fCode=?", [id]);
  return rows[0];
}

export async function getFlightBySrc(Src, Dest) {
  const [rows] = await pool.query(
    "SELECT * FROM flights WHERE Src=? AND Dest=?",
    [Src, Dest]
  );
  return rows;
}
