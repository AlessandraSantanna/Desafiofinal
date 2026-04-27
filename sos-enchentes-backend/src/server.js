import express from "express";
import cors from "cors";
import pedidosRoutes from "./routes/pedidosRoutes.js";

const app = express(); // 👈 PRIMEIRO cria o app

app.use(cors());
app.use(express.json());

app.use(pedidosRoutes); // 👈 DEPOIS usa as rotas

app.get("/", (req, res) => {
  res.send("API SOS Enchentes rodando 🚀");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});