import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Carousel from "./Carousel";

export default function Landing() {
  const navigate = useNavigate();
  const [showCarousel, setShowCarousel] = useState(true);

  const handleFinish = () => {
    console.log("Finalizar clicado!"); // debug para confirmar
    setShowCarousel(false);
  };

  return (
 
    
    <div className="landing-container">
      <div className="overlay">
        <div className="landing-content">
          <h1 className="landing-title">🚨 Alerta Solidário</h1>
          <p className="landing-text">
            Quando a enchente chega, cada segundo importa. <br />
            O Alerta Solidário conecta rapidamente quem precisa de ajuda com quem pode ajudar — 
            seja abrigo, resgate ou doações <br />
            Juntos, transformamos solidariedade em ação e levamos esperança a quem mais precisa.
          </p>

          <div className="landing-buttons">
            <button 
              className="btn-primary" 
              onClick={() => navigate("/cadastro-voluntario")}
            >
             
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => navigate("/home")}
            >
              Preciso de ajuda
            </button>
             <button 
              className="btn-primary" 
              onClick={() => navigate("/Dashboard")}
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Carrossel aparece sobreposto */}
      {showCarousel && (
        <Carousel onFinish={handleFinish} />
      )}
    </div>
    
  );
}
