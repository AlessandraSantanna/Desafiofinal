import axios from "axios";
const API_URL = "https://desafiofinal-zdnn.onrender.com"

export async function getPedidos() {
  const res = await fetch(`${API_URL}/pedidos`);
  return res.json();
}

export async function getStats() {
  const res = await axios.get(`${API_URL}/pedidos/stats`);
  return res.data;
}
export async function criarPedido(pedido) {
  const res = await fetch(`${API_URL}/pedidos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pedido)
  });
  return res.json();
}

export async function resolverPedido(id) {
  await fetch(`${API_URL}/pedidos/${id}/resolver`, {
    method: "PATCH"
  });
}

export async function listarVoluntariosPorRegiao() {
  const res = await fetch(`${API_URL}/voluntarios`);
  return res.json();
}
