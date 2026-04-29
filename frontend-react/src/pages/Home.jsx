import PedidoForm from "../components/PedidoForm";


export default function Home() {
  return (
    <div className="home-container">
      
      {/* Coluna esquerda: texto e imagem */}
      <div className="left-section">
      
        <img src="/favicon.png" alt="Alerta Solidário" className="home-logo" />
          <p className="home-subtitle">
         
        </p>
      </div>

      {/* Coluna direita: formulário */}
      <div className="right-section">
        <PedidoForm onNovoPedido={() => {}} />
      </div>
    </div>
  );
}
