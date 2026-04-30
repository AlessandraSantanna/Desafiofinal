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
// src/services/api.js

// Função mock para não quebrar o build
export async function listarVoluntariosPorRegiao() {
  // Retorna dados fictícios enquanto não há backend
  return [
    { id: 1, nome: "Voluntário A", regiao: "Centro" },
    { id: 2, nome: "Voluntário B", regiao: "Zona Norte" },
    { id: 3, nome: "Voluntário C", regiao: "Zona Sul" },
  ];
}

