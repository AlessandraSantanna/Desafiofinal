import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import pedidosRoutes from "./routes/pedidosRoutes.js";
import voluntariosRoutes from "./routes/voluntarios.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pool } from "./database/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// rotas
app.use("/pedidos", pedidosRoutes);
app.use("/voluntarios", voluntariosRoutes);

app.get("/setup-db", async (req, res) => {
  res.send("ROTA FUNCIONANDO");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);

  // roda o schema automaticamente ao iniciar
  try {
    const schemaPath = path.resolve(__dirname, "schema.sql");
    const sql = fs.readFileSync(schemaPath, "utf-8");

    await pool.query(sql);
    console.log("✅ Schema executado com sucesso!");
  } catch (err) {
    console.error("❌ Erro ao executar schema:", err);
  }
});
