import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard({ stats }) {
  if (!stats) return null;

  const data = {
    labels: ["Total", "Alta", "Média", "Baixa", "Resolvidos"],
    datasets: [
      {
        label: "Pedidos",
        data: [
          stats.total,
          stats.alta,
          stats.media,
          stats.baixa,
          stats.resolvidos,
        ],
        backgroundColor: [
          "#3498db", // azul
          "#e74c3c", // vermelho
          "#f1c40f", // amarelo
          "#2ecc71", // verde
          "#9b59b6", // roxo
        ],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Distribuição de Pedidos",
        font: { size: 18, weight: "bold" },
      },
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
    },
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">📊 Dashboard</h2>

      {/* Cards numéricos */}
      <div className="stats-grid">
        <div className="stat-card total">
          <h3>Total</h3>
          <p>{stats.total}</p>
        </div>
        <div className="stat-card alta">
          <h3>🔴 Prioridade Alta</h3>
          <p>{stats.alta}</p>
        </div>
        <div className="stat-card media">
          <h3>🟡 Prioridade Média</h3>
          <p>{stats.media}</p>
        </div>
        <div className="stat-card baixa">
          <h3>🟢 Prioridade Baixa</h3>
          <p>{stats.baixa}</p>
        </div>
        <div className="stat-card resolvidos">
          <h3>✅ Resolvidos</h3>
          <p>{stats.resolvidos}</p>
        </div>
      </div>

      {/* Gráfico em barras */}
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
