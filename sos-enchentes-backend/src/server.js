import express from "express";
import cors from "cors";
import pedidosRoutes from "./routes/pedidosRoutes.js";
import voluntariosRoutes from "./routes/voluntarios.js";

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