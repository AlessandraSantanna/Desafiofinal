import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sos_enchentes",
  password: "root",
  port: 5432,
});