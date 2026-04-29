import { useNavigate } from "react-router-dom";


export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="overlay">
        <div className="landing-content">
          <h1 className="landing-title">🚨 Alerta Solidário</h1>
          <p className="landing-text">
            Quando a enchente chega, cada segundo importa. <br />
            Nosso SOS Enchente conecta rapidamente quem precisa de ajuda com quem pode ajudar — 
            seja abrigo, resgate ou doações. <br />
            Juntos, transformamos solidariedade em ação e levamos esperança a quem mais precisa.
          </p>

          <div className="landing-buttons">
  <button 
    className="btn-primary" 
    onClick={() => navigate("/voluntario")}
  >
    Quero ser um voluntário
  </button>
  <button 
    className="btn-secondary" 
    onClick={() => navigate("/home")}
  >
    Preciso de ajuda
  </button>
</div>
        </div>
      </div>
    </div>
  );
}
