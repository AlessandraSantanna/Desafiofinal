import PedidoCard from "./PedidoCard";

export default function ListaPedidos({ pedidos, resolverPedido, filtro }) {
  const pedidosFiltrados = pedidos.filter((pedido) => {
    if (filtro === "resolvidos") return pedido.status === "resolvido";
        if (filtro === "pendentes") return pedido.status !== "resolvido";
    if (filtro === "comAnimais") return pedido.tem_animal === true;
    return true; // sem filtro, mostra todos
  });

  return (
    <div className="container">
      {pedidosFiltrados.map((pedido) => (
        <PedidoCard
          key={pedido.id}
          pedido={pedido}
          onResolver={resolverPedido}
        />
      ))}
    </div>
  );
}
