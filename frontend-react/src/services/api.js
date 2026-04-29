import axios from "axios";
const BASE_URL = "http://localhost:3000";

export async function getPedidos() {
  const res = await fetch(`${BASE_URL}/pedidos`);
  return res.json();
}

export async function getStats() {
  const res = await axios.get(`${BASE_URL}/pedidos/stats`);
  return res.data;
}

export async function criarPedido(pedido) {
  const res = await fetch(`${BASE_URL}/pedidos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pedido)
  });
  return res.json();
}

export async function resolverPedido(id) {
  await fetch(`${BASE_URL}/pedidos/${id}/resolver`, {
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

// Outras funções que você já tem (listarPedidos, criarPedido, etc.)