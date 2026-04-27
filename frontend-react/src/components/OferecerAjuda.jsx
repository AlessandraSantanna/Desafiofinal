import { useState } from "react";
import { criarPedido } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function OferecerAjuda({ onNovoPedido }) {
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
  <h2>🆘 Oferecer ajuda</h2>

  <input
    name="nome"
    placeholder="Nome"
    value={form.nome}
    onChange={handleChange}
    required
    className="input-field"
  /><br /><br />

  <input
    name="telefone"
    type="number"
    placeholder="Telefone"
    value={form.telefone}
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
    <option value="resgate">Atender em Resgate</option>
    <option value="abrigo">Atender em abrigo</option>
     <option value="cozinha">Cozinha </option>
     <option value="limpeza">Limpeza</option>
      <option value="socorro"> Primeiros Socorros</option>
  </select><br /><br />

 

  <button type="submit" className="submit-btn">Enviar pedido</button>
</form>
    );
}