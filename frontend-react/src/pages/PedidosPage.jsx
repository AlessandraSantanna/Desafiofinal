import { useEffect, useState } from "react";
import { getPedidos } from "../services/api"; /* sua função que busca os pedidos*/
import ListaPedidos from "../components/ListaPedidos";

export default function PedidosPage() {
  const [pedidos, setPedidos] = useState([]);
  const [filtro, setFiltro] = useState("todos");

  useEffect(() => {
    async function carregar() {
      const data = await getPedidos();
      setPedidos(data);
    }
    carregar();
  }, []);

  function resolverPedido(id) {
    /* aqui você chama sua API para marcar como resolvido */
    setPedidos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: "resolvido", data_resolvido: new Date() } : p
      )
    );
  }

  return (
    <div>
      <h2 className="container-title">📋 Pedidos Cadastrados</h2>
     <div className="filtros">
  <button
    className={filtro === "todos" ? "ativo" : ""}
    onClick={() => setFiltro("todos")}
  >
    Todos
  </button>
  <button
    className={filtro === "pendentes" ? "ativo" : ""}
    onClick={() => setFiltro("pendentes")}
  >
    Pendentes
  </button>
  <button
    className={filtro === "resolvidos" ? "ativo" : ""}
    onClick={() => setFiltro("resolvidos")}
  >
    Resolvidos
  </button>
  <button
    className={filtro === "comAnimais" ? "ativo" : ""}
    onClick={() => setFiltro("comAnimais")}
  >
    Com Animais
  </button>
</div>
      <ListaPedidos pedidos={pedidos} resolverPedido={resolverPedido} filtro={filtro} />
    </div>
  );
}
