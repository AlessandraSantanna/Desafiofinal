import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PedidosPage from "./pages/PedidosPage";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import VoluntarioPage from "./pages/VoluntarioPage";
import ListaVoluntariosPage from "./pages/ListaVoluntariosPage";

function App() {
  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pedidos" element={<PedidosPage />} />
       <Route path="/dashboard" element={<DashboardPage />} />
       <Route path="/voluntario" element={<VoluntarioPage />} />
      <Route path="/lista-voluntarios" element={<ListaVoluntariosPage />} />
    </Routes>
    </>
  );
}

export default App;
