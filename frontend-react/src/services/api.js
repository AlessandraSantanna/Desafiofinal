import axios from "axios";
import { pool } from "../database/db.js";

const api = axios.create({
  baseURL: "https://desafiofinal-zdnn.onrender.com",
});


// 📋 listar pedidos
export async function getPedidos() {
  const res = await api.get("/pedidos");
  return res.data;
}


// 📊 stats
export async function getStats() {
  const res = await api.get("/pedidos/stats");
  return res.data;
}


// 🆘 criar pedido
export async function criarPedido(pedido) {
  const res = await api.post("/pedidos", pedido);
  return res.data;
}


// ✅ resolver pedido
export async function resolverPedido(req, res) {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      UPDATE pedidos
      SET status = 'resolvido',
          data_resolvido = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );

    res.json(result.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      erro: "Erro ao resolver pedido"
    });
  }
}

// 👇 mock (ok por enquanto)
export async function listarVoluntariosPorRegiao() {
  const res = await api.get("/voluntarios");
  return res.data;
}
