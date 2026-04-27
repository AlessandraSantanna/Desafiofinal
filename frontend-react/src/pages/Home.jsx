import PedidoForm from "../components/PedidoForm";

export default function Home() {
  return (
    <div className="home-container">
      
      {/* Coluna direita: título + imagem centralizados */}
      <div className="right-section">
        <h1 className="home-title"> 🚨 SOS Enchentes</h1>
        <p>Preecncha as informações  para receber atendimento imediato</p>
        <img src="/enchente.webp" alt="Logo SOS Enchentes" className="home-logo" />
      </div>

      {/* Coluna esquerda: apenas o formulário */}
      <div className="left-section">
        <PedidoForm onNovoPedido={() => {}} />
      </div>
    </div>
  );
}
