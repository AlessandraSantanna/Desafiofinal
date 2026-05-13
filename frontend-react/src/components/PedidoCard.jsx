export default function PedidoCard({ pedido, onResolver }) {
  function tipoLabel(tipo) {
    if (tipo === "resgate") return "🆘 Resgate";
    if (tipo === "alimentacao") return "🍲 Alimentação";
    if (tipo === "abrigo") return "🏠 Abrigo";
    return tipo;
  }

  function tipoBotao(tipo) {
    if (tipo === "resgate") return "🚑 Defesa Civil";
    if (tipo === "alimentacao") return "🍲 Voluntários";
    if (tipo === "abrigo") return "🏠 Abrigo Regional";
    return tipo;
  }

  return (
    <div className={`pedido-card ${pedido.prioridade}`}>
      
      {/* TOPO */}
      <div className="card-top">
        <h2 className="pedido-nome">
          {pedido.nome}
        </h2>

        <span className={`status-badge ${pedido.status}`}>
          {pedido.status === "resolvido"
            ? "Resolvido"
            : "Pendente"}
        </span>
      </div>

      {/* REGIÃO */}
      <div className="info-linha">
        📍 {pedido.regiao}
      </div>

      {/* TIPO */}
      <div className="tipo-chamado">
        {tipoLabel(pedido.tipo)}
      </div>

      {/* ANIMAL */}
      <div className="info-linha">
        🐾 {pedido.tem_animal
          ? "Com animal"
          : "Sem animal"}
      </div>

      {/* DESCRIÇÃO */}
      <div className="descricao-card">
        {pedido.descricao}
      </div>

      {/* BOTÃO TIPO */}
      <button className="chamado-btn">
        {tipoBotao(pedido.tipo)}
      </button>

      {/* DATAS */}
      <div className="card-datas">

        <div className="data-item">
          📅 Criado em{" "}
          {pedido.data_criacao &&
            new Date(
              pedido.data_criacao
            ).toLocaleDateString()}
        </div>

        {pedido.status === "resolvido" &&
          pedido.data_resolvido && (
            <div className="data-item">
              ✅ Resolvido em{" "}
              {new Date(
                pedido.data_resolvido
              ).toLocaleString()}
            </div>
          )}
      </div>

      {/* BOTÃO RESOLVER */}
      {pedido.status !== "resolvido" && (
        <button
          className="resolver-btn"
          onClick={() => onResolver(pedido.id)}
        >
          Resolver
        </button>
      )}
    </div>
  );
}