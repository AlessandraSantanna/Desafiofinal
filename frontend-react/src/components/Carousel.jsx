import  { useState } from "react";
import "./Carousel.css";

const steps = [
  {
    title: "🚨Alerta Solidário - Como funciona",
    description:
      "Faça seu pedido de ajuda de acordo com sua idade:", 
     description1:
     " 1 - Resgate e Abrigo de idosos e crianças com prioridade alta. ",
    description2:
    " 2 - Abrigo - Perioridade Média - para pessoas maiores de 18 anos e menores de 60 anos. ",
    description3:
    " 3 - Doações - Prioridade baixa - para pessoas maiores de 18 anos e menores de 60 anos. "
    },
  {
    title: "📊Dashboard ",
    description1:
      "Visualize gráficos por Tipos de atendimento, região e prioridade .",
  },
  {
    title: " 🤝Cadastro de Voluntários",
    description1:
      "Cadastre-se informando sua região de atuação e qual ajuda pode oferecer.",
  },
];

export default function Carousel({ onFinish }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < steps.length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="carousel-overlay">
      <div className="carousel-card">
        <h2>{steps[index].title}</h2>
        <h3>{steps[index].description}</h3>
         <p>{steps[index].description1}</p>
          <p>{steps[index].description2}</p>
           <p>{steps[index].description3}</p>
        <div className="controls">
          {index > 0 && <button  className="carousel-btn"  onClick={prev}>◀ Voltar</button>}
          {index < steps.length - 1 ? (
            <button  className="carousel-btn"  onClick={next}>Próximo ▶</button>
          ) : (
            // botão Finalizar SEMPRE chama a função recebida por props
                <button
  className="carousel-btn finish"
  style={{ pointerEvents: "auto" }}
  onClick={onFinish}
>
  Finalizar
</button>
          )}
        </div>
        <div className="dots">
          {steps.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
