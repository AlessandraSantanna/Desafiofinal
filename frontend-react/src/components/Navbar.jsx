import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    
    <nav className="navbar">
        <div className="logo">
          <img src="/favicon.png" alt="Logo SOS Enchentes"  className="logo-img"/>
        </div>

      <div className={`nav-links ${open ? "active" : ""}`}>
         <Link to="/">Inicio</Link>
        <Link to="/home">Pedido de ajuda</Link>
        <Link to="/pedidos">Cadastrados </Link>
        <Link to="/dashboard">Dashboard</Link>
         <Link to="/voluntario" className="link-red">Quero ser um Voluntário </Link>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}