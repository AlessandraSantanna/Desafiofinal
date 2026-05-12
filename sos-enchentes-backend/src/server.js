import "dotenv/config";
import express from "express";
import cors from "cors";
import pedidosRoutes from "./routes/pedidosRoutes.js";
import voluntariosRoutes from "./routes/voluntarios.js";
import path from "path";
import fs from "fs";
import { pool } from "./database/db.js";

const app = express();

/* 🔥 Middlewares */
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

/* ✅ Rota raiz */
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    mensagem: "API SOS Enchentes rodando 🚀",
    rotas: ["/pedidos", "/pedidos/stats", "/voluntarios"]
  });
});

/* 📊 Stats */
app.get("/pedidos/stats", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM pedidos");

    const pedidos = result.rows;

    const stats = {
      total: pedidos.length,

      alta: pedidos.filter(
        (p) => p.prioridade?.toLowerCase() === "alta"
      ).length,

      media: pedidos.filter(
        (p) => p.prioridade?.toLowerCase() === "media"
      ).length,

      baixa: pedidos.filter(
        (p) => p.prioridade?.toLowerCase() === "baixa"
      ).length,

      resolvidos: pedidos.filter(
        (p) => p.status?.toLowerCase() === "resolvido"
      ).length,

      pendentes: pedidos.filter(
        (p) => p.status?.toLowerCase() === "pendente"
      ).length,

      abrigo: pedidos.filter(
        (p) => p.tipo?.toLowerCase() === "abrigo"
      ).length,

      resgate: pedidos.filter(
        (p) => p.tipo?.toLowerCase() === "resgate"
      ).length,

      alimentacao: pedidos.filter(
        (p) => p.tipo?.toLowerCase() === "alimentacao"
      ).length,

      cozinha: pedidos.filter(
        (p) => p.tipo?.toLowerCase() === "cozinha"
      ).length,

      limpeza: pedidos.filter(
        (p) => p.tipo?.toLowerCase() === "limpeza"
      ).length,

      socorro: pedidos.filter(
        (p) => p.tipo?.toLowerCase() === "socorro"
      ).length,

      zona_norte: pedidos.filter(
        (p) => p.regiao?.toLowerCase() === "zona_norte"
      ).length,

      zona_sul: pedidos.filter(
        (p) => p.regiao?.toLowerCase() === "zona_sul"
      ).length,

      zona_oeste: pedidos.filter(
        (p) => p.regiao?.toLowerCase() === "zona_oeste"
      ).length,

      centro: pedidos.filter(
        (p) => p.regiao?.toLowerCase() === "centro"
      ).length,

      baixada: pedidos.filter(
        (p) => p.regiao?.toLowerCase() === "baixada"
      ).length,
    };

    res.json(stats);

  } catch (error) {
    console.error("ERRO STATS:", error);

    res.status(500).json({
      erro: "Erro ao carregar estatísticas",
    });
  }
});

/* 🛣️ Rotas */
app.use("/pedidos", pedidosRoutes);
app.use("/voluntarios", voluntariosRoutes);

/* ✅ Health */
app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

/* ❌ 404 */
app.use((req, res) => {
  res.status(404).json({
    erro: "Rota não encontrada"
  });
});

/* 💥 Erro global */
app.use((err, req, res, next) => {
  console.error("ERRO GLOBAL:", err);

  res.status(500).json({
    erro: "Erro interno do servidor"
  });
});

const PORT = process.env.PORT || 3000;

/* 🚀 Iniciar servidor */
app.listen(PORT, async () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);

  try {
    const schemaPath = path.resolve("src/schema.sql");

    if (fs.existsSync(schemaPath)) {
      const sql = fs.readFileSync(schemaPath, "utf-8");

      if (process.env.NODE_ENV !== "production") {
        await pool.query(sql);
        console.log("✅ Schema executado!");
      }
    }

  } catch (err) {
    console.error("❌ Erro schema:", err.message);
  }
});