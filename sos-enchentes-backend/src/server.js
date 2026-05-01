import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import pedidosRoutes from "./routes/pedidosRoutes.js";
import voluntariosRoutes from "./routes/voluntarios.js";
import fs from "fs";
import path from "path";
import { pool } from "./database/db.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/pedidos", pedidosRoutes);
app.use("/voluntarios", voluntariosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);

  try {
    const schemaPath = path.resolve("src/schema.sql"); 
    const sql = fs.readFileSync(schemaPath, "utf-8");

    await pool.query(sql);
    console.log("✅ Schema executado com sucesso!");
  } catch (err) {
    console.error("❌ Erro ao executar schema:", err);
  }
      app.get("/setup-db", async (req, res) => {
      res.send("ROTA FUNCIONANDO");
    });
});
