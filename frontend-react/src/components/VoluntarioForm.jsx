import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function VoluntarioForm({ onNovoVoluntario }) {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    disponibilidade: "",
    observacoes: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

 async function handleSubmit(e) {
  e.preventDefault();
  try {
    console.log("Enviando voluntário:", form); // 🔥 debug
    await axios.post("http://localhost:3000/voluntarios", form);
    alert("Voluntário cadastrado com sucesso 🚀");
    navigate("/voluntario");
    setForm({ nome:"", telefone:"", email:"", disponibilidade:"", observacoes:"", regiao:"" });
    if (onNovoVoluntario) onNovoVoluntario();
  } catch (error) {
    alert("Erro ao cadastrar voluntário ❌");
    console.error(error);
  }
}


 

  return (
    <form onSubmit={handleSubmit} className="voluntario-form">
      <h2>🤝 Formulário de Voluntário</h2>

      <div className="form-group">
        <input
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
          value={form.nome}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>

      <div className="form-group">
        <input
          id="telefone"
          name="telefone"
          placeholder="Digite seu telefone"
          value={form.telefone}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>

      <div className="form-group">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Digite seu e-mail"
          value={form.email}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>

      <div className="form-group">
        <select
          id="disponibilidade"
          name="disponibilidade"
          value={form.disponibilidade}
          onChange={handleChange}
          required
          className="input-field"
        >
          <option value="">Selecione sua disponibilidade</option>
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>
      </div>

      <div className="form-group">
        <textarea
          id="observacoes"
          name="observacoes"
          placeholder="Observações (habilidades, transporte, etc.)"
          value={form.observacoes}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
  <select
    id="regiao"
    name="regiao"
    value={form.regiao}
    onChange={handleChange}
    required
    className="input-field"
  >
    <option value="">Selecione sua região</option>
    <option value="Zona Norte">Zona Norte</option>
    <option value="Zona Sul">Zona Sul</option>
    <option value="Zona Oeste">Zona Oeste</option>
    <option value="Centro">Centro</option>
  </select>
</div>


      <button type="submit" className="submit-btn">Cadastrar Voluntário</button>
      
    </form>
  );
  
}
