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
  const res = await api.patch(`/pedidos/${id}/resolver`);
  return res.data;
}


// 👇 mock (ok por enquanto)
export async function listarVoluntariosPorRegiao() {
  return [
    { id: 1, nome: "Voluntário A", regiao: "Centro" },
    { id: 2, nome: "Voluntário B", regiao: "Zona Norte" },
    { id: 3, nome: "Voluntário C", regiao: "Zona Sul" },
  ];
}