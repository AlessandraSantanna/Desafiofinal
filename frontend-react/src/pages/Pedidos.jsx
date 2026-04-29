import { useEffect, useState } from "react";
import { getPedidos, resolverPedido } from "../services/api";
import PedidoCard from "../components/PedidoCard";


export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  async function carregar() {
    const data = await getPedidos();
    setPedidos(data);
  }

  useEffect(() => {
    const loadPedidos = async () => {
      await carregar();
    };
    loadPedidos();
  }, []);

  async function handleResolver(id) {
    await resolverPedido(id);
    carregar();
  }

  return (
  
    <div className="container-geral">
        <div className="container-title">
        <h2>📋Pedidos Cadastrados</h2>
        </div>
<div className="container">
      {pedidos.length === 0 ? (
        <p>Nenhum pedido encontrado</p>
      ) : (
        pedidos.map(p => (
          <PedidoCard
            key={p.id}
            pedido={p}
            onResolver={handleResolver}
          />
        ))
      )}
      </div>
    </div>
  );
}