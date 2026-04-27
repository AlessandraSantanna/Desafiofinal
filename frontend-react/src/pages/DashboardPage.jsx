import { useEffect, useState } from "react";
import { getStats } from "../services/api";
import Dashboard from "../components/Dashboard";


export default function DashboardPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function carregar() {
      const data = await getStats();
      setStats(data);
    }

    carregar();
  }, []);

  return (
    <div>
      <Dashboard stats={stats} />
    </div>
  );
}