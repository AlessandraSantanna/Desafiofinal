import "dotenv/config";
import express from "express";
import cors from "cors";
import pedidosRoutes from "./routes/pedidosRoutes.js";
import voluntariosRoutes from "./routes/voluntarios.js";

const app = express();

/* 🔥 Middlewares */
app.use(cors());
app.use(express.json());

/* ✅ Rota raiz */
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    mensagem: "API SOS Enchentes rodando 🚀",
    rotas: ["/pedidos", "/pedidos/stats", "/voluntarios"]
  });
});

/* ✅ Rotas principais */
app.use("/pedidos", pedidosRoutes);
app.use("/voluntarios", voluntariosRoutes);

/* ✅ Health check (melhor nome que setup-db) */
app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

/* ❌ Rota não encontrada */
app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada" });
});

/* 💥 Tratamento global de erros */
app.use((err, req, res, next) => {
  console.error("ERRO GLOBAL:", err);
  res.status(500).json({ erro: "Erro interno do servidor" });
});

const PORT = process.env.PORT || 3000;

/* 🚀 Iniciar servidor */
app.listen(PORT, async () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);

  try {
    const schemaPath = path.resolve("src/schema.sql");
    const sql = fs.readFileSync(schemaPath, "utf-8");

    await pool.query(sql); // ✅ agora pode

    console.log("✅ Schema executado!");
  } catch (err) {
    console.error("❌ Erro schema:", err.message);
  }
});