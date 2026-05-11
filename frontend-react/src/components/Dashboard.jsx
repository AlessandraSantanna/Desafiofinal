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

  if (!stats) {
    return <p>Carregando dashboard...</p>;
  }

  /* =========================
     📊 GRÁFICO DE BARRAS
  ========================= */
  const barData = {
    labels: [
      "Total",
      "Alta",
      "Média",
      "Baixa",
      "Resolvidos",
    ],

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
     📈 GRÁFICO TIPOS
  ========================= */
  const lineData = {
    labels: [
      "Abrigo",
      "Resgate",
      "Alimentação",
      
    ],

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
     📍 GRÁFICO REGIÕES
  ========================= */
  const regiaoData = {
    labels: [
      "Zona Norte",
      "Zona Sul",
      "Zona Oeste",
      "Centro",
      "Baixada",
    ],

    datasets: [
      {
        label: "Chamados por Região",

        data: [
          Number(stats.zona_norte || 0),
          Number(stats.zona_sul || 0),
          Number(stats.zona_oeste || 0),
          Number(stats.centro || 0),
          Number(stats.baixada || 0),
        ],

        borderColor: "#e74c3c",

        backgroundColor: "#e74c3c",

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

      <h2 className="dashboard-title">
        📊 Dashboard Alerta Solidário
      </h2>

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

      {}

     {/* =========================
    📈📍 GRÁFICOS LADO A LADO
========================= */}
<div className="charts-row">

  {/* TIPOS */}
  <div className="chart-container small-chart">

    <h3>🆘 Tipos de Chamados</h3>

    <Line
      data={lineData}
      options={options}
    />

  </div>

  {/* REGIÕES */}
  <div className="chart-container small-chart">

    <h3>📍 Chamados por Região</h3>

    <Line
      data={regiaoData}
      options={options}
    />

  </div>

</div>
{/* =========================
          📊 BARRAS
      ========================= */}
      <div className="chart-container">

        <h3>📊 Resumo Geral</h3>

        <Bar
          data={barData}
          options={options}
        />

      </div>
    </div>
    
  );
}