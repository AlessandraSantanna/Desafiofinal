export default function PedidoCard({ pedido, onResolver }) {
 
      // Função para formatar o texto da prioridade
  function formatPrioridade(prioridade) {
    if (prioridade === "alta") return "Prioridade Alta";
    if (prioridade === "media") return "Prioridade Média";
    if (prioridade === "baixa") return "Prioridade Baixa";
    return prioridade;
  }
 return (
    <div
      className={`card ${pedido.prioridade}`}
      
    >
      <div className="circle">
        <h2>{formatPrioridade(pedido.prioridade)}</h2> {/* prioridade dentro do círculo */}
      </div>

      <div className="content">
        <strong>{pedido.nome}</strong><br />
        📍 {pedido.bairro}<br />
        📝 {pedido.descricao}<br />
        🐾 {pedido.tem_animal ? "Com animal" : "Sem animal"}<br />
        📌 {pedido.status}<br />

        {pedido.data_criacao && (
          <div>🕒 {new Date(pedido.data_criacao).toLocaleString()}</div>
        )}

        {pedido.data_resolvido && (
          <div>✅ {new Date(pedido.data_resolvido).toLocaleString()}</div>
        )}

        {pedido.status !== "resolvido" && (
          <a onClick={() => onResolver(pedido.id)}>Resolver</a>
        )}
      </div>
    </div>
  );
}
