import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
//postgresql://desafiofinal_27bu_user:2hRkhxd9YU4pmeyvT65RZSKPQSPrdfaj@dpg-d7pfhasvikkc73adlgl0-a.oregon-postgres.render.com/desafiofinal_27bu