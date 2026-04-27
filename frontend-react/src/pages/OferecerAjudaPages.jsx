import { useEffect, useState } from "react";
import { getPedidos, resolverPedido } from "../services/api";
import OferecerAjuda from "../components/OferecerAjuda";



export default function OferecerAjudaPages() {
  const [pedidos, setPedidos] = useState([]);

  async function carregar() {
    const data = await getPedidos();
    setPedidos(data);
  }

  useEffect(() => {
  
  }, []);

  async function handleResolver(id) {
    await resolverPedido(id);
    carregar();
  }

  return (
    <div className="container-geral">
      <div className="container-ajuda">
    
        {/* ✅ Um único formulário */}
        <OferecerAjuda onNovoPedido={carregar} />
      </div>

        <div className="container-pedidos">
          {pedidos.map(pedido => (
            <div key={pedido.id}>
              {/* Exibir detalhes do pedido aqui, por exemplo: */}
              <p>{pedido.descricao}</p>
              <button onClick={() => handleResolver(pedido.id)}>Resolver</button>
            </div>
          ))}
      </div>
    </div>
  );
}
