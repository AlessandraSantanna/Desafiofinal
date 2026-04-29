import { useState } from "react";
import { criarPedido } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function PedidoForm({ onNovoPedido }) {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    tipo: "resgate",
    descricao: "",
    tem_animal: false,
    bairro: ""
  });
const navigate = useNavigate();
  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      ...form,
      idade: Number(form.idade)
    };

    try {
      await criarPedido(payload);

      alert("Pedido criado com sucesso 🚀");
      navigate("/pedidos");

      setForm({
        nome: "",
        idade: "",
        tipo: "resgate",
        descricao: "",
        tem_animal: false,
        bairro: ""
      });

      onNovoPedido(); // 🔥 recarrega lista

    } catch (error) {
      alert("Erro ao criar pedido ❌");
      console.error(error);
    }
  }

  return (
  <form onSubmit={handleSubmit} className="pedido-form">
  <h2>🆘 Preciso de ajuda</h2>

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
      id="idade"
      name="idade"
      type="number"
      placeholder="Digite sua idade"
      value={form.idade}
      onChange={handleChange}
      required
      className="input-field"
    />
  </div>

  <div className="form-group">
   
    <select
      id="tipo"
      name="tipo"
      value={form.tipo}
      onChange={handleChange}
      className="input-field"
    >
      <option value="resgate">Resgate - Crianças - Idosos - prioridade alta</option>
      <option value="alimentacao">Alimentação - prioridade média</option>
      <option value="abrigo">Abrigo - prioridade baixa</option>
    </select>
  </div>

  <div className="form-group">
    <label htmlFor="descricao">Descreva a situação</label>
    <textarea
      id="descricao"
      name="descricao"
      placeholder="Explique o que está acontecendo"
      value={form.descricao}
      onChange={handleChange}
      className="input-field"
    />
  </div>

  <div className="form-group checkbox-label">
    <input
      type="checkbox"
      name="tem_animal"
      checked={form.tem_animal}
      onChange={handleChange}
    />
    <label>Tem animal</label>
  </div>

  <div className="form-group">
  
    <input
      id="bairro"
      name="bairro"
      placeholder="Informe o bairro"
      value={form.bairro}
      onChange={handleChange}
      required
      className="input-field"
    />
  </div>

  <button type="submit" className="submit-btn">Cadastrar</button>
</form>
  );
}