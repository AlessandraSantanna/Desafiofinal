import PedidoForm from "../components/PedidoForm";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* ESQUERDA */}
      <div className="left-section">

        <img
          src="/favicon.png"
          alt="Alerta Solidário"
          className="home-logo"
        />

        <button
          className="submit-btn-cadastro"
          onClick={() => navigate("/pedidos")}
        >
         ➡️ Pedidos de Ajuda Cadastrados
        </button>

      </div>

      {/* DIREITA */}
      <div className="right-section">
        <PedidoForm onNovoPedido={() => {}} />
      </div>

    </div>
  );
}