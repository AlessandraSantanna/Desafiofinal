
export default function PedidoCard({ pedido, onResolver }) {
  function formatPrioridade(prioridade) {
    if (prioridade === "alta") return "Prioridade Alta";
    if (prioridade === "media") return "Prioridade Média";
    if (prioridade === "baixa") return "Prioridade Baixa";
    return prioridade;
  }

  return (
    <div className={`pedido-card ${pedido.prioridade}`}>
      <h3 className="pedido-titulo">{formatPrioridade(pedido.prioridade)}</h3>

      <p><strong>{pedido.nome}</strong></p>
      <p>📍 {pedido.bairro}</p>
      <p>📝 {pedido.descricao}</p>
      <p>📌 descrição: {pedido.tipo}</p>
      <p>🐾 {pedido.tem_animal ? "Com animal" : "Sem animal"}</p>
      <p>📌 {pedido.status}</p>
      

      {pedido.data_criacao && (
        <p className="pedido-data">🕒 {new Date(pedido.data_criacao).toLocaleString()}</p>
      )}
      {pedido.data_resolvido && (
        <p className="pedido-data">✅ {new Date(pedido.data_resolvido).toLocaleString()}</p>
      )}

      {pedido.status === "pendente" && (
        <span className={`badge badge-${pedido.tipo}`}>
          {pedido.tipo === "resgate" && "Chamado com a Defesa Civil"}
          {pedido.tipo === "alimentacao" && "Chamado com os Voluntários"}
          {pedido.tipo === "abrigo" && "Chamado com o Abrigo da Região"}
        </span>
      )}

      {pedido.status !== "resolvido" && (
        <button className="resolver-btn" onClick={() => onResolver(pedido.id)}>
          Resolver
        </button>
      )}
    </div>
  );
}
