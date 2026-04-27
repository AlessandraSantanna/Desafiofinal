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

  <input
    name="nome"
    placeholder="Nome"
    value={form.nome}
    onChange={handleChange}
    required
    className="input-field"
  /><br /><br />

  <input
    name="idade"
    type="number"
    placeholder="Idade"
    value={form.idade}
    onChange={handleChange}
    required
    className="input-field"
  /><br /><br />

  <select name="tipo" value={form.tipo} onChange={handleChange} className="input-field">
    <option value="resgate">Resgate - Crianças - Idosos - prioridade alta</option>
    <option value="alimentacao">Alimentação - prioridade média</option>
    <option value="abrigo">Abrigo - prioridade baixa</option>
  </select><br /><br />

  <textarea
    name="descricao"
    placeholder="Descreva a situação"
    value={form.descricao}
    onChange={handleChange}
    className="input-field"
  /><br /><br />

  <label className="checkbox-label">
    <input
      type="checkbox"
      name="tem_animal"
      checked={form.tem_animal}
      onChange={handleChange}
    />
     <span className="custom-check"></span>
  Tem animal
</label><br /><br />

  <input
    name="bairro"
    placeholder="Bairro"
    value={form.bairro}
    onChange={handleChange}
    required
    className="input-field"
  /><br /><br />

  <button type="submit" className="submit-btn">Enviar pedido</button>
</form>
    );
}