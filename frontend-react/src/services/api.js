import axios from "axios";

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
export async function resolverPedido(id) {

  const res = await api.put(
    `/pedidos/${id}/resolver`
  );

  return res.data;
}

// 👇 mock (ok por enquanto)
export async function listarVoluntariosPorRegiao() {
  const res = await api.get("/voluntarios");
  return res.data;
}
