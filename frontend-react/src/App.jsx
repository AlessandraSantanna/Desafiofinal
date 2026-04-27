import { Routes, Route,  } from "react-router-dom";
import Navbar from "./components/Navbar";


import Home from "./pages/Home";

import DashboardPage from "./pages/DashboardPage";
import PedidosPage from "./pages/PedidosPage";
import Oferecer from "./pages/OferecerAjudaPages";

export default function App() {
  return (
    <div>

      {/* MENU */}
      <nav>
       <Navbar />
      </nav>

      <hr />

      {/* ROTAS */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
         <Route path="/pedidos" element={<PedidosPage />} />
           <Route path="/oferecer" element={<Oferecer />} />
      </Routes>

    </div>
  );
}