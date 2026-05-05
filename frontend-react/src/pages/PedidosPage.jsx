import { useEffect, useState } from "react";
import { getPedidos, resolverPedido as resolverPedidoAPI } from "../services/api";
import ListaPedidos from "../components/ListaPedidos";

export default function PedidosPage() {
  const [pedidos, setPedidos] = useState([]);
  const [filtro, setFiltro] = useState("todos");
  const [loading, setLoading] = useState(true);

  // 📋 carregar pedidos
  useEffect(() => {
    async function carregarPedidos() {
      try {
        const data = await getPedidos();
        setPedidos(data);
      } catch (err) {
        console.error("Erro ao carregar pedidos:", err);
      } finally {
        setLoading(false);
      }
    }

    carregarPedidos();
  }, []);

  // ✅ resolver pedido
  async function resolverPedido(id) {
    try {
      await resolverPedidoAPI(id);

      // atualização imediata (UX melhor)
      setPedidos((prev) =>
        prev.map((p) =>
          p.id === id
            ? { ...p, status: "resolvido", data_resolvido: new Date() }
            : p
        )
      );
    } catch (err) {
      console.error("Erro ao resolver pedido:", err);
    }
  }

  if (loading) return <p>Carregando pedidos...</p>;

  return (
    <div>
      <h2 className="container-title">📋 Pessoas Cadastradas</h2>

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

      <ListaPedidos
        pedidos={pedidos}
        resolverPedido={resolverPedido}
        filtro={filtro}
      />
    </div>
  );
}