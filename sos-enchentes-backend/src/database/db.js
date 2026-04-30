import pkg from "pg";
const { Pool } = pkg;
import { pool } from "./db.js";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect()
  .then(() => console.log("✅ Conectado ao banco!"))
  .catch(err => console.error("❌ Erro ao conectar:", err));

  
//postgresql://desafiofinal_27bu_user:2hRkhxd9YU4pmeyvT65RZSKPQSPrdfaj@dpg-d7pfhasvikkc73adlgl0-a.oregon-postgres.render.com/desafiofinal_27bu