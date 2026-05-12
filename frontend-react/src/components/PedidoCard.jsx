export default function PedidoCard({ pedido, onResolver }) {

  function corPrioridade(prioridade) {
    if (prioridade === "alta") return "alta";
    if (prioridade === "media") return "media";
    if (prioridade === "baixa") return "baixa";
    return "default";
  }

  return (
    <div className={`pedido-card ${pedido.prioridade}`}>

      {/* barra superior fixa */}
      <div className={`card-top ${pedido.prioridade}`}></div>

      {/* cabeçalho */}
      <div className="pedido-header">
        <div>
          <h3 className="pedido-nome">
            {pedido.nome || "Sem nome"}
          </h3>

          <p className="pedido-regiao">
            📍 {pedido.regiao}
          </p>
        </div>

        <div className="card-badges">

  {/* STATUS */}
  <span className={`status-badge ${corPrioridade(pedido.prioridade)}`}>
    {pedido.status}
  </span>

  {/* TIPO DE CHAMADO */}
  {pedido.status === "pendente" && (
    <span className={`tipo-badge badge-${pedido.tipo}`}>

      {pedido.tipo === "resgate" &&
        "🚨 Defesa Civil"}

      {pedido.tipo === "alimentacao" &&
        "🍲 Voluntários"}

      {pedido.tipo === "abrigo" &&
        "🏠 Abrigo"}

    </span>
  )}

</div>
      </div>

      {/* conteúdo */}
      <div className="pedido-body">

        <p className="pedido-tipo">
          🆘 {pedido.tipo}
        </p>

        <p className="pedido-animal">
          {pedido.tem_animal ? "🐾 Com animal" : "🐾 Sem animal"}
        </p>

        <hr />

        <p className="pedido-desc">
          {pedido.descricao}
        </p>

        {pedido.data_criacao && (
          <p className="pedido-data">
            📅 {new Date(pedido.data_criacao).toLocaleDateString()}
          </p>
        )}
      </div>

      {/* botão */}
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