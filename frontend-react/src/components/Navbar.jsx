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
        <Link to="/">Home</Link>
        <Link to="/pedidos">Pedidos de Ajuda</Link>
        <Link to="/dashboard">Dashboard</Link>
         <Link to="/oferecer" className="link-red">Oferecer Ajuda </Link>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}