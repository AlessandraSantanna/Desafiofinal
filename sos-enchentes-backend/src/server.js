import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cors from "cors";
import pedidosRoutes from "./routes/pedidosRoutes.js";
import voluntariosRoutes from "./routes/voluntarios.js";
import fs from "fs";
import path from "path";
import { pool } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

// rotas
app.use("/pedidos", pedidosRoutes);
app.use("/voluntarios", voluntariosRoutes);

//app.get("/", (req, res) => {
 // res.send("API SOS Enchentes rodando 🚀");
//});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
async function rodarSchema() {
  try {
    const schemaPath = path.resolve("src/schema.sql"); // ajuste se necessário
    const sql = fs.readFileSync(schemaPath, "utf-8");

    await pool.query(sql);
    console.log("Schema executado com sucesso!");
  } catch (err) {
    console.error("Erro ao executar schema:", err);
  }
}

rodarSchema();