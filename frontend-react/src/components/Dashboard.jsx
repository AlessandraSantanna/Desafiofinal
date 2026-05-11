import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard({ stats }) {
  if (!stats) return null;

  /* =========================
     📊 GRÁFICO DE BARRAS
  ========================= */
  const barData = {
    labels: ["Total", "Alta", "Média", "Baixa", "Resolvidos"],
    datasets: [
      {
        label: "Pedidos",
        data: [
          Number(stats.total || 0),
          Number(stats.alta || 0),
          Number(stats.media || 0),
          Number(stats.baixa || 0),
          Number(stats.resolvidos || 0),
        ],
        backgroundColor: [
          "#3498db",
          "#e74c3c",
          "#f1c40f",
          "#2ecc71",
          "#9b59b6",
        ],
        borderRadius: 8,
      },
    ],
  };

  /* =========================
     📈 GRÁFICO DE LINHA
  ========================= */
  const lineData = {
    labels: ["Abrigo", "Resgate", "Alimentação"],
    datasets: [
      {
        label: "Tipos de Pedidos",
        data: [
          Number(stats.abrigo || 0),
          Number(stats.resgate || 0),
          Number(stats.alimentacao || 0),
        ],
        borderColor: "#3498db",
        backgroundColor: "#3498db",
        tension: 0.4,
        pointRadius: 5,
        fill: false,
      },
    ],
  };

  /* =========================
     ⚙️ OPÇÕES
  ========================= */
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">📊 Dashboard</h2>

      {/* =========================
          🎛️ FILTROS
      ========================= */}
      <div className="filtros">
        <button className="ativo">Todos</button>
        <button>Abrigo</button>
        <button>Resgate</button>
        <button>Alimentação</button>
      </div>

      {/* =========================
          📦 CARDS
      ========================= */}
      <div className="stats-grid">
        <div className="stat-card total">
          <h3>Total</h3>
          <p>{stats.total || 0}</p>
        </div>

        <div className="stat-card alta">
          <h3>🔴 Prioridade Alta</h3>
          <p>{stats.alta || 0}</p>
        </div>

        <div className="stat-card media">
          <h3>🟡 Prioridade Média</h3>
          <p>{stats.media || 0}</p>
        </div>

        <div className="stat-card baixa">
          <h3>🟢 Prioridade Baixa</h3>
          <p>{stats.baixa || 0}</p>
        </div>

        <div className="stat-card resolvidos">
          <h3>✅ Resolvidos</h3>
          <p>{stats.resolvidos || 0}</p>
        </div>
      </div>

      {/* =========================
          📊 GRÁFICO BARRAS
      ========================= */}
      <div className="chart-container">
        <Bar data={barData} options={options} />
      </div>

      {/* =========================
          📈 GRÁFICO LINHA
      ========================= */}
      <div className="chart-container">
        <Line data={lineData} options={options} />
      </div>
    </div>
  );
}