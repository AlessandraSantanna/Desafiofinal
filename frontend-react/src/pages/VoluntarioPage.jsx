import { useNavigate } from "react-router-dom";
import VoluntarioForm from "../components/VoluntarioForm";

export default function VoluntarioPage() {
  const navigate = useNavigate(); /* 👈 inicializa o hook */

  return (
    <div className="home-container">
      {/* Coluna esquerda: texto e imagem */}
      <div className="left-section">
        <img src="/favicon.png" alt="Alerta Solidário" className="home-logo" />
        
          <div>
            <button
              className="submit-btn-vol"
              onClick={() => navigate("/lista-voluntarios")}  /* 👈 agora funciona */
            >
              Voluntários Cadastrados
            </button>
          </div>
       
      </div>

      {/* Coluna direita: formulário */}
      <div className="right-section">
        <VoluntarioForm onNovoPedido={() => {}} />
      </div>
    </div>
  );
}
