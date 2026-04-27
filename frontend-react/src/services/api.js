const BASE_URL = "http://localhost:3000";

export async function getPedidos() {
  const res = await fetch(`${BASE_URL}/pedidos`);
  return res.json();
}

export async function getStats() {
  const res = await fetch(`${BASE_URL}/pedidos/stats`);
  return res.json();
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