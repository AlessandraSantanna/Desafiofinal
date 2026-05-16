import { useState } from "react";
import "./Carousel.css";

const steps = [
  {
    title: "🚨 Como funciona",
    description: "Pedidos priorizados por idade e situação:",
    items: [
      "🔴 Resgate e Abrigo — idosos e crianças (prioridade alta)",
      "🟡 Abrigo — 18 a 60 anos (prioridade média)",
      "🟢 Doações — 18 a 60 anos (prioridade baixa)",
    ],
  },
  {
    title: "📊 Dashboard",
    description: "Visualize gráficos por tipo de atendimento, região e prioridade.",
    items: [],
  },
  {
    title: "🤝 Seja Voluntário",
    description: "Cadastre-se informando sua região e como pode ajudar.",
    items: [],
  },
];

export default function Carousel({ onFinish }) {
  const [index, setIndex] = useState(0);
  const step = steps[index];

  return (
    <div className="carousel-overlay">
      <div className="carousel-card">
        <h2>{step.title}</h2>
        <p className="carousel-desc">{step.description}</p>

        {step.items.length > 0 && (
          <ul className="carousel-list">
            {step.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        <div className="controls">
          {index > 0 && (
            <button className="carousel-btn" onClick={() => setIndex(index - 1)}>
              ◀ Voltar
            </button>
          )}
          {index < steps.length - 1 ? (
            <button className="carousel-btn" onClick={() => setIndex(index + 1)}>
              Próximo ▶
            </button>
          ) : (
            <button className="carousel-btn finish" onClick={onFinish}>
              Finalizar
            </button>
          )}
        </div>

        <div className="dots">
          {steps.map((_, i) => (
            <span key={i} className={i === index ? "dot active" : "dot"} />
          ))}
        </div>
      </div>
    </div>
  );
}