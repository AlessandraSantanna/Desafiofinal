import "dotenv/config";
import express from "express";
import cors from "cors";
import pedidosRoutes from "./routes/pedidosRoutes.js";
import voluntariosRoutes from "./routes/voluntarios.js";

const app = express();

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

/* ✅ Rota de teste */
app.get("/setup-db", (req, res) => {
  res.send("API funcionando corretamente ✅");
});

const PORT = process.env.PORT || 3000;

/* ✅ Iniciar servidor */
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});